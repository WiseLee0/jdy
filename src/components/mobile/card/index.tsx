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
      </CellGroup>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleH2 = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const CellGroup = styled.div`
  width: 354px;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
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
  width: 100%;
  height: 215px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const CellTitle = styled.div<{
  color: string;
}>`
  width: 100%;
  color: #fff;
  font-size: 14px;
  line-height: 34px;
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
  width: 50%;
  padding: 10px 15px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: ${(p) => p.w}px;
    height: 24px;
    margin-bottom: 20px;
  }
  span:nth-of-type(1) {
    font-size: 12px;
    font-weight: 400;
    color: #5e6d82;
    line-height: 21px;
    margin-bottom: 10px;
  }
  span:nth-of-type(2) {
    font-size: 12px;
    font-weight: 400;
    color: #0db3a6;
    line-height: 20px;
    cursor: pointer;
  }
`;
export default Card;
