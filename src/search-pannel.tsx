import styled from "@emotion/styled";
import React, { memo, useEffect, useRef } from "react";
import { cityList } from "./data";
import { useSearchPannel } from "./hooks";
const CELLHEIGHT = 40;
type Props = {
  setSearchContent: (content: string) => void;
  setShow: (show: boolean) => void;
  setExist: (show: boolean) => void;
};
const SearchPannel = memo(({ setSearchContent, setShow, setExist }: Props) => {
  const ref = useRef<HTMLDivElement[]>([]);
  const [cityData, setSelectValue, getName] = useSearchPannel(cityList);
  useEffect(() => {
    setSearchContent(getName().join("-"));
  }, [getName]);
  /**
   * 处理滚动事件
   */
  const onHandleScroll = debounce((idx: number) => {
    const dom = ref.current[idx] as unknown as HTMLDivElement;
    const index = Math.floor(dom.scrollTop / 40);
    const end = index * 40;
    // 改变颜色
    const selectNode = dom.children[index] as HTMLDivElement;
    let selectIndex = index;
    if (selectNode.children.length) return;

    for (let i = 0; i < dom.children.length; i++) {
      const child = dom.children[i] as HTMLDivElement;
      if (child !== selectNode) child.style.color = "#333";
      else {
        child.style.color = "#0db3a6";
        selectIndex = i;
      }
    }
    // 改变位置
    scrollToTop(dom, end, 500, false);
    setSelectValue(idx, selectIndex);
    for (let i = idx + 1; i < ref.current.length; i++) {
      if (ref.current[i]) {
        scrollToTop(ref.current[i], 0, 500, false);
      }
    }
  });
  const onHandleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    idx: number
  ) => {
    const dom = ref.current[idx] as unknown as HTMLDivElement;
    const index = Math.floor(dom.scrollTop / 40);
    let end = index * 40;
    const selectNode = event.target as HTMLDivElement;
    let selectIndex = index;
    if (selectNode.children.length) return;

    // 改变颜色
    for (let i = 0; i < dom.children.length; i++) {
      const child = dom.children[i] as HTMLDivElement;
      if (child !== selectNode) child.style.color = "#333";
      else {
        child.style.color = "#0db3a6";
        end = i * CELLHEIGHT;
        selectIndex = i;
      }
    }
    if (dom.scrollTop == 0) dom.scrollTop = 40;
    // 改变位置
    scrollToTop(dom, end, 500, selectIndex - index > 0);
    setSelectValue(idx, selectIndex);
    for (let i = idx + 1; i < ref.current.length; i++) {
      if (ref.current[i]) {
        scrollToTop(ref.current[i], 0, 500, false);
      }
    }
  };

  return (
    <Container>
      <Box>
        <List>
          {cityData.map((items, index) => {
            return (
              <Group
                key={index}
                onScroll={() => onHandleScroll(index)}
                onClick={(e) => onHandleClick(e, index)}
                ref={(dom) => {
                  if (!ref.current.includes(dom!) && dom)
                    ref.current.push(dom!);
                }}
              >
                {items.map((item) => {
                  return <Cell key={item.value as number}>{item.name}</Cell>;
                })}
              </Group>
            );
          })}
        </List>
        <LineTop></LineTop>
        <LineBottom></LineBottom>
      </Box>
      <Operate>
        <div
          onClick={() => {
            setExist(false);
            setShow(false);
            setSearchContent("");
          }}
        >
          清空
        </div>
        <div onClick={() => setShow(false)}>确定</div>
      </Operate>
    </Container>
  );
});
function debounce(callback: (...args: any) => void, duration = 200) {
  let timer: null | number = null;
  return (...args: any) => {
    if (timer) clearTimeout(timer!);
    timer = setTimeout(() => {
      callback(...args);
    }, duration);
  };
}
function scrollToTop(
  ele: HTMLDivElement,
  top: number,
  duration: number,
  isDown: boolean
) {
  if (ele.scrollTop == 0) return;
  const totalScrollDistance = ele.scrollTop;
  let scrollY = totalScrollDistance;
  let oldTimestamp: any = null;
  function step(newTimestamp: number) {
    if (oldTimestamp !== null) {
      if (isDown) {
        scrollY +=
          (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
        if (scrollY >= top) return (ele.scrollTop = top);
      } else {
        scrollY -=
          (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
        if (scrollY <= top) return (ele.scrollTop = top);
      }
      ele.scrollTop = scrollY;
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
`;
const Box = styled.div`
  height: 200px;
  border-bottom: 2px solid #eee;
  position: relative;
`;
const List = styled.div`
  position: absolute;
  top: 5%;
  bottom: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
  overflow-y: scroll;
  padding: 70px 0;
  transition: all 1s;
  div:nth-of-type(1) {
    color: #0db3a6;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Cell = styled.div`
  line-height: ${CELLHEIGHT}px;
  text-align: center;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  padding: 0 20px;
  flex-shrink: 0;
`;
const LineTop = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 1px;
  background-color: #cccc;
  transform: translateY(-15px);
`;
const LineBottom = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 1px;
  background-color: #cccc;
  transform: translateY(15px);
`;
const Operate = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  div:nth-of-type(1) {
    margin-right: 20px;
    cursor: pointer;
  }
  div:nth-of-type(2) {
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: #0db3a6;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default SearchPannel;
