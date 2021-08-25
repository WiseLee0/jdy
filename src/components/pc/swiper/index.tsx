import styled from "@emotion/styled";
import React, { useState } from "react";
import { themeColor } from "../../../common/style";
import { swiperList } from "./data";

export default function Swiper() {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <TitleH2>零代码搭建灵活易用，满足个性化管理需求</TitleH2>
      <TabBox>
        <TabLeft>
          {swiperList.map((item, idx) => {
            return (
              <TabCell
                key={item.name}
                light={index == idx}
                onClick={() => {
                  setIndex(idx);
                }}
              >
                <i className={"iconfont " + item.icon}></i>
                {item.name}
              </TabCell>
            );
          })}
        </TabLeft>
        <TabRight
          index={index}
          aimgWidth={swiperList[index].data.a.imgWidth}
          bimgWidth={swiperList[index].data.b.imgWidth}
        >
          <img src={swiperList[index].data.img} />
          {swiperList[index].data.a.url && (
            <img src={swiperList[index].data.a.url} />
          )}
          {swiperList[index].data.b.url && (
            <img src={swiperList[index].data.b.url} />
          )}
          <div>
            <span>{swiperList[index].data.content}</span>
            <span>查看详情</span>
          </div>
        </TabRight>
      </TabBox>
    </Container>
  );
}
const Container = styled.div`
  box-sizing: border-box;
  width: 1280px;
  padding: 50px 100px;
  margin: 0 auto;
`;
const TitleH2 = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 400;
  color: #1f2d3d;
  line-height: 59px;
  margin-bottom: 50px;
`;
const TabBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`;
const TabLeft = styled.div`
  width: 240px;
`;

const TabRight = styled.div<{
  index: number;
  aimgWidth: number;
  bimgWidth: number;
}>`
  width: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @keyframes amove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes bmove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  img:nth-of-type(1) {
    max-width: 560px;
    margin-bottom: 50px;
  }
  img:nth-of-type(2) {
    position: absolute;
    top: ${(props) => swiperList[props.index].data.b.top + "px"};
    left: ${(props) => swiperList[props.index].data.b.left + "px"};
    z-index: ${(props) => swiperList[props.index].data.b.zIndex};
    width: ${(props) => `${props.bimgWidth}px`};
    animation: bmove 3s infinite;
  }
  img:nth-of-type(3) {
    position: absolute;
    top: ${(props) => swiperList[props.index].data.a.top + "px"};
    left: ${(props) => swiperList[props.index].data.a.left + "px"};
    z-index: ${(props) => swiperList[props.index].data.a.zIndex};
    width: ${(props) => `${props.aimgWidth}px`};
    animation: amove 3s infinite;
  }
  span:nth-of-type(1) {
    font-size: 16px;
    font-weight: 400;
    color: #5e6d82;
    line-height: 22px;
  }
  span:nth-of-type(2) {
    font-size: 16px;
    font-weight: 400;
    color: ${themeColor};
    line-height: 22px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

const TabCell = styled.div<{
  light: boolean;
}>`
  color: ${(props) => (props.light ? themeColor : "#5e6d82")};
  font-size: 20px;
  line-height: 64px;
  padding-left: 100px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
  box-shadow: ${(props) =>
    props.light ? "0 0 8px 0 rgb(64 106 103 / 13%)" : ""};

  .iconfont {
    position: absolute;
    left: 60px;
    font-size: 22px;
    color: ${(props) => (props.light ? themeColor : "#c3cdda")};
  }
`;
