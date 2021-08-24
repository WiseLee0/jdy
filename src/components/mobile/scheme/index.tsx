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
  box-sizing: border-box;
  width: 354px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  margin: 40px 0;
`;
const Cell = styled.div`
  box-sizing: border-box;
  width: 47%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #1f2d3d;
  box-shadow: 0 2px 12px 0 rgb(64 106 103 / 13%);
  cursor: pointer;
  margin-bottom: 15px;
  img {
    width: 24px;
    margin-left: 10px;
  }
  span {
    margin-left: 10px;
  }
  :hover {
    transform: translate(0, -6px);
    box-shadow: 0 8px 19px 0 rgb(16 20 40 / 7%);
  }
`;
export default Scheme;
