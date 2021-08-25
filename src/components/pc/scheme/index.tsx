import styled from "@emotion/styled";
import React from "react";
import { schemeData } from "./data";

const Scheme = () => {
  return (
    <Container>
      <TitleH2>各行各业都能使用的解决方案，安装即用</TitleH2>
      <CellGroup>
        {schemeData.map((item, index) => {
          return (
            <Cell key={index}>
              <img src={item.img} />
              <span>{item.name}</span>
            </Cell>
          );
        })}
      </CellGroup>
    </Container>
  );
};
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
const CellGroup = styled.div`
  box-sizing: border-box;
  width: 1060px;
  height: 248px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
`;
const Cell = styled.div`
  box-sizing: border-box;
  width: 332px;
  height: 96px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #1f2d3d;
  box-shadow: 0 2px 12px 0 rgb(64 106 103 / 13%);
  cursor: pointer;
  img {
    width: 44px;
    margin-left: 40px;
  }
  span {
    margin-left: 20px;
  }
  :hover {
    transform: translate(0, -6px);
    box-shadow: 0 8px 19px 0 rgb(16 20 40 / 7%);
  }
`;
export default Scheme;
