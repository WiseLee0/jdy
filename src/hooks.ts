import { useCallback, useEffect, useState } from "react";
type TNode = {
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

export const useSearchPannel = (origin: TNode[]) => {
  const [data, setData] = useState<TData[][]>([]);
  const [cache, setCache] = useState<TNode[]>([]);
  const [idx, setIdx] = useState<number[]>([]);

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
    dfs(origin, 0, ans, 0);
    setData(ans);
    setIdx(new Array(ans.length).fill(0));
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
    const ans = [];
    for (const index of idx) {
      ans.push(data[index] && data[index].name);
      if (data[index].children) {
        data = data[index].children!;
      }
    }
    return ans;
  }, [cache, idx]);
  const getValue = useCallback(() => {
    let data = cache.slice();
    const ans = [];
    for (const index of idx) {
      ans.push(data[index] && data[index].value);
      if (data[index].children) {
        data = data[index].children!;
      }
    }
    return ans;
  }, [cache, idx]);
  return [data, setSelectValue, getName, getValue] as const;
};
