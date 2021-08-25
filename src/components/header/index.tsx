import styled from "@emotion/styled";
import React from "react";
import { themeColor } from "../../common/style";

export default function Header() {
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dom = e.currentTarget as HTMLDivElement;
    const blank = dom.children[1] as HTMLDivElement;
    const list = dom.children[2] as HTMLDivElement;
    blank.style.display = "block";
    list.style.display = "flex";
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dom = e.currentTarget as HTMLDivElement;
    const blank = dom.children[1] as HTMLDivElement;
    const list = dom.children[2] as HTMLDivElement;
    blank.style.display = "none";
    list.style.display = "none";
  };
  return (
    <Container>
      <FlexCell>
        <img src="https://blog-assets.jiandaoyun.com/index/logo-pure.png" />
        <div>
          <LinkButton light>首页</LinkButton>
          <LinkButton
            arrow
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span>产品功能</span>
            <BlockCell></BlockCell>
            <List>
              <Cell>在线表单</Cell>
              <Cell>流程引擎</Cell>
              <Cell>仪表盘</Cell>
              <Cell>知识库</Cell>
              <Cell>团队协作</Cell>
            </List>
          </LinkButton>
          <LinkButton
            arrow
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span>行业案例</span>
            <BlockCell></BlockCell>
            <List>
              <Cell>
                <span>CRM</span>
              </Cell>
              <Cell>
                <span>疫情防控</span>
              </Cell>
              <Cell>进销存</Cell>
              <Cell>项目管理</Cell>
              <Cell>供应商管理</Cell>
              <Cell>设备管理</Cell>
              <Cell>
                <span>更多方案</span>
              </Cell>
            </List>
          </LinkButton>
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
          <TextButton min="true">
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
  padding: 0 25px;
  box-shadow: 0 5px 8px 0 rgb(64 106 103 / 13%);
  background: rgba(255, 255, 255, 0.95);
  z-index: 99;
`;
const FlexCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;

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
const BlockCell = styled.div`
  position: absolute;
  left: -33%;
  top: 58px;
  width: 180px;
  height: 22px;
  display: none;
`;
const List = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  left: -33%;
  display: none;
  flex-direction: column;
  width: 180px;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 20%);
  border-radius: 3px;
`;
const Cell = styled.div`
  display: block;
  color: #474b51;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  border-radius: 5px;
  span {
    position: relative;
    ::after {
      position: absolute;
      right: -30px;
      top: -15px;
      content: "Hot!";
      font-size: 12px;
      color: #f00;
      font-weight: 600;
      transform: scale(0.8);
    }
  }
  :hover {
    background: #f4f6f9;
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
  min?: string;
}>`
  line-height: 30px;
  font-size: 14px;
  color: ${themeColor};
  cursor: pointer;
  @media (min-width: 1200px) {
    display: ${(props) => (props.min == "true" ? "none" : "inline-block")};
  }
  @media not all and (min-width: 1200px) {
    display: ${(props) => (props.min == "true" ? "inline-block" : "none")};
    color: #333;
  }
`;
