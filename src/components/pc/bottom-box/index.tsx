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
  width: 1280px;
  margin: 40px auto;
  padding: 100px 0;
  background-image: url(https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-sybg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  p {
    font-size: 24px;
    color: #fff;
    line-height: 33px;
    text-shadow: 0 1px 3px rgb(37 127 213 / 50%);
    margin-right: 30px;
  }
  div {
    width: 385px;
    height: 48px;
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    input {
      margin: 0;
      padding: 0;
      vertical-align: middle;
      border: 0;
      outline: 0;
    }
    input:nth-of-type(1) {
      background-image: url(https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-iphone.png);
      background-size: 17px;
      background-repeat: no-repeat;
      background-position: 15px center;
      width: 265px;
      font-size: 16px;
      padding-left: 42px;
      font-weight: 400;
      line-height: 22px;
    }
    input:nth-of-type(2) {
      width: 120px;
      height: 48px;
      background: #ff971e;
      border-radius: 24px;
      color: #fff;
      cursor: pointer;
    }
  }
`;
export default BottomBox;
