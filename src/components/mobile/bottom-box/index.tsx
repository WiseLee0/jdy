import styled from "@emotion/styled";
import React from "react";

const BottomBox = () => {
  return (
    <Container>
      <p>现在注册领取高级功能试用</p>
      <div>
        <input type="text" placeholder="输入手机号" />
        <input type="button" value="免费体验" />
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  padding: 30px 0;
  background-image: url("https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-sybg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 0;
    color: #fff;
  }
  div {
    width: 90%;
    height: 36px;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      margin: 0;
      padding: 0;
      vertical-align: middle;
      border: 0;
      outline: 0;
    }
    input:nth-of-type(1) {
      background-image: url("https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-iphone.png");
      background-size: 14px;
      background-repeat: no-repeat;
      background-position: 15px center;
      font-size: 16px;
      padding-left: 42px;
      font-weight: 400;
      line-height: 22px;
      color: #1f2d3d;
      width: 60%;
      font-size: 14px;
      height: 36px;
      transform: translateX(20px);
      margin-left: -20px;
    }
    input:nth-of-type(2) {
      background: #ff971e;
      border-radius: 24px;
      color: #fff;
      cursor: pointer;
      width: 40%;
      font-size: 14px;
      height: 36px;
    }
  }
`;
export default BottomBox;
