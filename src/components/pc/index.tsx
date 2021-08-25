import styled from "@emotion/styled";
import React, { useState } from "react";
import Banner from "./banner";
import BottomBox from "./bottom-box";
import Card from "./card";
import Footer from "./footer";
import Logo from "./logo";
import Scheme from "./scheme";
import Swiper from "./swiper";
import TextAuto from "./text-auto";

export default function Pc() {
  const [show, setShow] = useState(true);
  return (
    <Container>
      <MessageBanner show={show}>
        <img
          src="https://blog-assets.jiandaoyun.com/index/outsourcing/delete_btn.png"
          onClick={() => setShow(false)}
        />
      </MessageBanner>
      <Recommend>
        <TextAuto></TextAuto>
        <img
          style={{ width: "650px" }}
          src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-indexbannera.png"
        />
      </Recommend>
      <Swiper></Swiper>
      <Scheme></Scheme>
      <Card></Card>
      <Banner></Banner>
      <Logo></Logo>
      <BottomBox></BottomBox>
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  @media (min-width: 1200px) {
    display: block;
  }
  @media not all and (min-width: 1200px) {
    display: none;
  }
`;
const MessageBanner = styled.div<{
  show: boolean;
}>`
  width: 100%;
  height: 60px;
  background: url("https://blog-assets.jiandaoyun.com/index/outsourcing/leader_contest.png")
    center center no-repeat;
  background-size: cover;
  margin-top: 60px;
  position: relative;
  visibility: ${(p) => (p.show ? "" : "hidden")};
  img {
    width: 16px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    cursor: pointer;
    z-index: 1;
  }
`;
const Recommend = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 130px;
  box-sizing: border-box;
  margin: 0 auto;
`;
