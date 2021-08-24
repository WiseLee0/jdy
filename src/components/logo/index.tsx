import styled from "@emotion/styled";
import React from "react";

const Logo = () => {
  return (
    <Container>
      <TitleH2>越来越多企业组织都在使用简道云</TitleH2>
      <img src="https://blog-assets.jiandaoyun.com/index/bricks/brickslogo/logos_pc.png" />
      <div>查看更多案例 &gt;&gt;</div>
    </Container>
  );
};
const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 80px 0 40px 0;
  background: linear-gradient(
    270deg,
    rgba(229, 237, 243, 0) 0,
    #e9f1f8 50%,
    rgba(229, 237, 243, 0) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 1280px;
    margin-bottom: 60px;
  }
  div:nth-of-type(2) {
    width: 200px;
    height: 48px;
    background: #0db3a6;
    -webkit-box-shadow: 0 0 20px 0 rgb(64 106 103 / 20%);
    box-shadow: 0 0 20px 0 rgb(64 106 103 / 20%);
    border-radius: 24px;
    display: block;
    margin: 15px auto 0;
    font-size: 16px;
    text-align: center;
    font-weight: 400;
    color: #fff;
    line-height: 48px;
    cursor: pointer;
  }
`;
const TitleH2 = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 400;
  color: #1f2d3d;
  line-height: 59px;
  margin: 50px 0;
`;

export default Logo;
