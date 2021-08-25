import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { themeColor } from "../../../common/style";

export default function TextAuto() {
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState("");
  const [cursor, setCursor] = useState(false);

  const textTemp = [
    "生产管理应用",
    "人事管理应用",
    "进消存应用",
    "设备管理应用",
  ];

  useEffect(() => {
    setTimeout(() => {
      const len = content.length;
      const text = textTemp[index];
      if (len < text.length) {
        setContent(text.slice(0, len + 1));
      } else if (len >= text.length) {
        setTimeout(() => {
          if (index == textTemp.length - 1) setIndex(0);
          else setIndex(index + 1);
          setContent("");
        }, 600);
      }
    }, 200);
  }, [content]);
  useEffect(() => {
    setTimeout(() => {
      setCursor(!cursor);
    }, 200);
  }, [cursor]);
  return (
    <Container>
      <TitleH2>零代码轻量级应用搭建平台</TitleH2>
      <ContentH3>
        <span>5分钟创建一个</span>
        <span>{content}</span>
        <span
          style={{
            opacity: cursor ? 1 : 0,
            transition: "all 0.2s",
          }}
        >
          |
        </span>
      </ContentH3>
      <PhoneRegister>
        <PhoneInput></PhoneInput>
        <TextButton>免费注册</TextButton>
      </PhoneRegister>
      <VideoDescibe>
        <img src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-playbtn.png" />
        查看视频介绍
      </VideoDescibe>
    </Container>
  );
}
const Container = styled.div`
  padding: 160px 0 100px;
`;
const TitleH2 = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: #1f2d3d;
  line-height: 53px;
  margin: 0 0 5px 0;
`;
const ContentH3 = styled.h3`
  font-size: 30px;
  font-weight: 400;
  color: ${themeColor};
  line-height: 42px;
  margin: 0 0 40px 0;
  font-weight: 600;
  span:nth-of-type(1) {
    color: #283a4c;
    font-weight: normal;
  }
`;
const PhoneRegister = styled.div`
  display: flex;
  box-shadow: 0 1px 8px 0 rgb(123 123 123 / 9%);
  width: 400px;
  height: 48px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
`;
const PhoneInput = styled.input`
  margin: 0;
  padding: 0;
  vertical-align: middle;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  width: 260px;
  font-size: 14px;
  padding-left: 45px;
  height: 48px;
  font-weight: 400;
  color: #1f2d3d;
  background-image: url(https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-iphone.png);
  background-size: 17px;
  background-repeat: no-repeat;
  background-position: 15px center;
`;
const TextButton = styled.div`
  width: 140px;
  height: 48px;
  background: #0db3a6;
  color: #fff;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
`;
const VideoDescibe = styled.p`
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #5e6d82;
  line-height: 22px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  img {
    width: 18px;
    margin-right: 6px;
  }
`;
