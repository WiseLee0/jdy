import styled from "@emotion/styled";
import React from "react";
import { cardData } from "./data";

const Card = () => {
  return (
    <Container>
      <TitleH2>把想法快速变成现实，为企业贡献多元价值</TitleH2>
      <CellGroup>
        {cardData.map((item, index) => {
          return (
            <Cell key={index}>
              <CellTitle color={item.color}>{item.name}</CellTitle>

              <BoxGroup>
                {item.data.map((d, idx) => (
                  <Box w={d.w} key={idx}>
                    <img src={d.img} />
                    <span>{d.content}</span>
                    <span>查看详情 &gt;&gt;</span>
                  </Box>
                ))}
              </BoxGroup>
            </Cell>
          );
        })}
        <CenterImg src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-nlogo.png"></CenterImg>
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
  box-sizing: border-box;
  width: 1280px;
  height: 580px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  position: relative;
`;
const CenterImg = styled.img`
  width: 134px;
  height: 134px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
const Cell = styled.div`
  box-sizing: border-box;
  width: 627px;
  height: 280px;
  display: flex;
  flex-direction: column;
`;
const CellTitle = styled.div<{
  color: string;
}>`
  width: 100%;
  color: #fff;
  line-height: 64px;
  text-align: center;
  background: ${(p) => p.color};
`;
const BoxGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Box = styled.div<{
  w: number;
}>`
  width: 237px;
  padding: 40px 30px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: ${(p) => p.w}px;
    height: 41px;
    margin-bottom: 20px;
  }
  span:nth-of-type(1) {
    font-size: 14px;
    font-weight: 400;
    color: #5e6d82;
    line-height: 21px;
    margin-bottom: 10px;
  }
  span:nth-of-type(2) {
    font-size: 14px;
    font-weight: 400;
    color: #0db3a6;
    line-height: 20px;
  }
`;
export default Card;
