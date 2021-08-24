import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { themeColor } from "../../common/style";
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
        <Header>
          {bannerData.map((b, index) => {
            return (
              <PlainButton
                key={index}
                light={bannerIndex == index}
                onClick={() => setBannerIndex(index)}
              >
                {b.name}
              </PlainButton>
            );
          })}
        </Header>
        <CardGroup>
          <Scroll ref={bannerRef} index={bannerIndex}>
            {bannerData.map((b, index) => (
              <Card key={index}>
                <img src={b.img} />
                <Content>
                  <h3>{b.name}</h3>
                  <span>{b.content}</span>
                  <span>查看使用方案 &gt;&gt;</span>
                </Content>
              </Card>
            ))}
          </Scroll>
        </CardGroup>
      </CellGroup>
    </Container>
  );
};
const Container = styled.div`
  width: 1280px;
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
const CellGroup = styled.div`
  width: 1280px;
  height: 408px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 60px;
  div:nth-last-of-type(1) {
    margin-right: 0;
  }
`;
const PlainButton = styled.div<{
  light: boolean;
}>`
  height: 48px;
  width: 250px;
  padding: 0 20px;
  border-radius: 24px;
  margin-right: 25px;
  border: ${(p) => (p.light ? "none" : "1px solid #d9d9d9")};
  font-size: 13px;
  font-weight: 400;
  color: ${(p) => (p.light ? "#333" : "#5e6d82")};
  line-height: 46px;
  text-align: center;
  cursor: pointer;
  background-color: ${(p) => (p.light ? themeColor : "#fff")};
  opacity: 1;
`;
const CardGroup = styled.div`
  width: 1280px;
  box-shadow: 0 0 18px 0 rgb(64 106 103 / 13%);
  border-radius: 15px;
  overflow: hidden;
`;
const Scroll = styled.div<{
  index: number;
}>`
  transform: ${(p) => {
    const distance = p.index * 1280;
    return `translateX(-${distance}px)`;
  }};
  transition: all 0.5s;
  display: flex;
`;
const Card = styled.div`
  width: 1280px;
  flex-shrink: 0;
  display: flex;
  img {
    width: 380px;
  }
`;
const Content = styled.div`
  width: 750px;
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
  padding: 0 40px;
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #3d464d;
    line-height: 28px;
    margin-bottom: 20px;
  }
  span:nth-of-type(1) {
    font-size: 16px;
    font-weight: 400;
    color: #5e6d82;
    line-height: 28px;
    text-align: justify;
  }
  span:nth-of-type(2) {
    font-size: 16px;
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
