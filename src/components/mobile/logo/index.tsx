import styled from "@emotion/styled";
import React from "react";

const Logo = () => {
  return (
    <Container>
      <TitleH2>越来越多企业组织都在使用简道云</TitleH2>
      <img src="https://blog-assets.jiandaoyun.com/index/bricks/brickslogo/logos_mobile.png" />
      <div>查看更多案例 &gt;&gt;</div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 90%;
    margin-bottom: 20px;
  }
  div:nth-of-type(2) {
    background-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: auto;
    height: auto;
    font-size: 14px;
    font-weight: 400;
    color: #0db3a6;
    line-height: 33px;
    cursor: pointer;
  }
`;
const TitleH2 = styled.div`
  font-size: 20px;
  line-height: 35px;
  padding-bottom: 10px;
`;

export default Logo;
