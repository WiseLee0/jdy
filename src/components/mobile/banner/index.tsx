import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { themeColor } from "../../../common/style";
import { bannerData } from "./data";

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      let index = bannerIndex;
      if (bannerIndex == 5) index = 0;
      else index += 1;
      setBannerIndex(index);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [bannerIndex]);
  return (
    <Container>
      <TitleH2>900,000+企业的信赖之选</TitleH2>
      <CellGroup>
        <CardGroup>
          <Scroll ref={bannerRef} index={bannerIndex}>
            {bannerData.map((b, index) => (
              <Card key={index}>
                <Content>
                  <h3>{b.name}</h3>
                  <span>{b.content}</span>
                  <span>查看使用方案 &gt;&gt;</span>
                </Content>
              </Card>
            ))}
          </Scroll>
        </CardGroup>
        <BottomCell>
          {bannerData.map((b, index) => {
            return (
              <PlainButton
                key={index}
                light={bannerIndex == index}
                onClick={() => setBannerIndex(index)}
              ></PlainButton>
            );
          })}
        </BottomCell>
      </CellGroup>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const TitleH2 = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: #1f2d3d;
  line-height: 59px;
  text-align: center;
`;
const CellGroup = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const BottomCell = styled.div`
  display: flex;
  margin-bottom: 60px;
  div:nth-last-of-type(1) {
    margin-right: 0;
  }
`;
const PlainButton = styled.div<{
  light: boolean;
}>`
  width: 20px;
  height: 4px;
  border-radius: 1px;
  opacity: 1;
  margin: 0 3px;
  background: ${(p) => (p.light ? themeColor : "#e7e7e7")};
`;
const CardGroup = styled.div`
  box-sizing: border-box;
  width: 100vw;
  border-radius: 15px;
  overflow: hidden;
`;
const Scroll = styled.div<{
  index: number;
}>`
  transform: ${(p) => {
    const distance = p.index * 350;
    return `translateX(-${distance}px)`;
  }};
  transition: all 0.5s;
  display: flex;
`;
const Card = styled.div`
  width: 350px;
  flex-shrink: 0;
`;
const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 0;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 40px;
  h3 {
    font-size: 14px;
    font-weight: 600;
    color: #3d464d;
    line-height: 28px;
    margin-bottom: 20px;
  }
  span:nth-of-type(1) {
    font-size: 12px;
    font-weight: 400;
    color: #5e6d82;
    line-height: 28px;
    text-align: justify;
  }
  span:nth-of-type(2) {
    font-size: 12px;
    font-weight: 400;
    color: #0db3a6;
    line-height: 22px;
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    cursor: pointer;
  }
`;
export default Banner;
