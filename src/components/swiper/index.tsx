import styled from "@emotion/styled";
import React, { useState } from "react";
import { themeColor } from "../../common/style";
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
              <TabCell key={item.name} light={index == idx}>
                <i className={"iconfont " + item.icon}></i>
                {item.name}
              </TabCell>
            );
          })}
        </TabLeft>
        <TabRight index={index}>
          <img src={swiperList[index].data.img} />
          <img src={swiperList[index].data.a.url} />
          <img src={swiperList[index].data.b.url} />
          <span>{swiperList[index].data.content}</span>
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
}>`
  width: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @keyframes amove {
    0% {
      top: ${(props) => swiperList[props.index].data.a.top};
    }
    50% {
      top: ${(props) => swiperList[props.index].data.a.top + 10 + "px"};
    }
    100% {
      top: ${(props) => swiperList[props.index].data.a.top};
    }
  }
  @keyframes bmove {
    0% {
      top: ${(props) => swiperList[props.index].data.b.top};
    }
    50% {
      top: ${(props) => swiperList[props.index].data.b.top + 10 + "px"};
    }
    100% {
      top: ${(props) => swiperList[props.index].data.b.top};
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
    width: 120px;
    animation: bmove 3s infinite;
  }
  img:nth-of-type(3) {
    position: absolute;
    top: ${(props) => swiperList[props.index].data.a.top + "px"};
    left: ${(props) => swiperList[props.index].data.a.left + "px"};
    z-index: ${(props) => swiperList[props.index].data.a.zIndex};
    width: 120px;
    animation: amove 3s infinite;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    color: #5e6d82;
    line-height: 22px;
  }
`;

const TabCell = styled.div<{
  light: boolean;
}>`
  color: ${(props) => (props.light ? themeColor : "#5e6d82")};
  font-size: 20px;
  line-height: 64px;
  padding-left: 58px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 15px;

  .iconfont {
    position: absolute;
    left: 15px;
    font-size: 22px;
    color: ${(props) => (props.light ? themeColor : "#c3cdda")};
  }
`;
