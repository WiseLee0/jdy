import styled from "@emotion/styled";
import React from "react";
import { themeColor } from "../../common/style";

export default function Header() {
  return (
    <Container>
      <FlexCell>
        <img src="https://blog-assets.jiandaoyun.com/index/logo-pure.png" />
        <div>
          <LinkButton light>首页</LinkButton>
          <LinkButton arrow>产品功能</LinkButton>
          <LinkButton arrow>行业案例</LinkButton>
          <LinkButton>定价</LinkButton>
          <LinkButton>定制</LinkButton>
          <LinkButton>学习与服务</LinkButton>
          <LinkButton>关于我们</LinkButton>
        </div>
        <div>
          <PlainButton>登录</PlainButton>
          <PlainButton>注册</PlainButton>
          <TextButton>
            <i
              className="iconfont icon-diqiu"
              style={{ marginRight: "5px" }}
            ></i>
            简体中文
            <i
              className="iconfont icon-icon-24-xiajiantou"
              style={{ marginLeft: "5px" }}
            ></i>
          </TextButton>
          <TextButton min>
            <i className="iconfont icon-caidan"></i>
          </TextButton>
        </div>
      </FlexCell>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 15px 25px;
  background-color: rgba(250, 250, 250, 0.9);
`;
const FlexCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  > img:nth-of-type(1) {
    width: 123px;
    height: 31px;
  }
  > div:nth-of-type(1) {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  > div:nth-of-type(2) {
    width: 271px;
    height: 31px;
    display: flex;
    justify-content: flex-end;
  }
`;
const LinkButton = styled.div<{
  arrow?: boolean;
  light?: boolean;
}>`
  padding: 19px 15px;
  font-size: 16px;
  color: ${(props) => (props.light ? themeColor : "#444")};
  cursor: pointer;
  position: relative;
  margin-right: ${(props) => (props.arrow ? "20px" : "0")};
  :hover {
    color: ${themeColor};
  }
  :hover::after {
    border-color: ${themeColor} transparent transparent transparent;
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    border-color: #444 transparent transparent transparent;
    border-style: ${(props) => (props.arrow ? "solid" : "")};
    border-width: 5px 5px 0 5px;
    height: 0;
    width: 0;
  }
  @media (min-width: 1200px) {
    display: block;
  }
  @media not all and (min-width: 1200px) {
    display: none;
  }
`;
const PlainButton = styled.div`
  display: inline-block;
  line-height: 30px;
  font-size: 16px;
  color: ${themeColor};
  padding: 0 15px;
  border-radius: 2px;
  border: 1px solid ${themeColor};
  cursor: pointer;
  margin-right: 14px;
  :hover {
    background: ${themeColor};
    color: #fff;
  }
`;
const TextButton = styled.div<{
  min?: boolean;
}>`
  line-height: 30px;
  font-size: 14px;
  color: ${themeColor};
  @media (min-width: 1200px) {
    display: ${(props) => (props.min ? "none" : "inline-block")};
  }
  @media not all and (min-width: 1200px) {
    display: ${(props) => (props.min ? "inline-block" : "none")};
    color: #333;
  }
`;
