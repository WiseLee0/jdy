import { useCallback, useEffect, useMemo, useState } from "react";
export type TNode = {
  name: string;
  value: unknown;
  children?: TNode[];
};
type TData = {
  name: string;
  value: unknown;
};
/**
 * 适配数据
 *
 * @param origin 原始数据
 * @param idx 选中下标
 * @param ans 结果数组
 * @param count 层级
 * @returns
 */

export const useSearchPannel = (origin: TNode[], defaultIdx?: number[]) => {
  const [data, setData] = useState<TData[][]>([]);
  const [cache, setCache] = useState<TNode[]>([]);
  let [idx, setIdx] = useState<number[]>([]);

  function dfs(origin: TNode[], suffix: number, ans: TNode[][], count: number) {
    if (!origin.length) return;
    const temp = [];
    for (let index = 0; index < origin.length; index++) {
      const item = origin[index];
      if (index == suffix && item.children) {
        dfs(item.children, idx[count + 1] || 0, ans, count + 1);
      }
      temp.push({
        name: item.name,
        value: item.value,
      });
    }
    ans[count] = temp;
  }

  useEffect(() => {
    let ans: TNode[][] = [];
    setCache(origin);
    if (!defaultIdx) {
      dfs(origin, 0, ans, 0);
      setData(ans);
      setIdx(new Array(ans.length).fill(0));
    } else {
      idx = defaultIdx;
      dfs(origin, idx[0], ans, 0);
      setData(ans);
      setIdx(idx);
    }
  }, [origin]);
  const setSelectValue = (count: number, index: number) => {
    let ans: TNode[][] = [];
    idx[count] = index;
    dfs(cache, idx[0], ans, 0);
    setData(ans);
    setIdx([...idx]);
  };
  const getName = useCallback(() => {
    let data = cache.slice();
    if (!data.length) return;
    const ans = [];
    for (const index of idx) {
      if (data[index]) {
        ans.push(data[index].name);
        if (data[index].children) {
          data = data[index].children!;
        }
      }
    }
    return ans;
  }, [cache, idx]);
  const getValue = useCallback(() => {
    let data = cache.slice();
    if (!data.length) return;
    const ans = [];
    for (const index of idx) {
      if (data[index]) {
        ans.push(data[index].value);
        if (data[index].children) {
          data = data[index].children!;
        }
      }
    }
    return ans;
  }, [cache, idx]);

  const isReady = cache.length > 0 ? true : false;
  return [data, setSelectValue, getName, getValue, isReady] as const;
};
