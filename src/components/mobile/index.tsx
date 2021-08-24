import styled from "@emotion/styled";
import React, { useState } from "react";
import Banner from "./banner";
import BottomBox from "./bottom-box";
import Card from "./card";
import Logo from "./logo";
import Recommend from "./recommend";
import Scene from "./scene";
import Scheme from "./scheme";

export default function Mobile() {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <MessageBanner show={show}>
        <img
          src="https://blog-assets.jiandaoyun.com/index/outsourcing/delete_btn.png"
          onClick={() => setShow(false)}
        />
      </MessageBanner>
      <Recommend></Recommend>
      <Scene></Scene>
      <Scheme></Scheme>
      <Card></Card>
      <Banner></Banner>
      <Logo></Logo>
      <BottomBox></BottomBox>
    </Container>
  );
}

const Container = styled.div`
  @media (min-width: 450px) {
    display: none;
  }
  @media not all and (min-width: 450px) {
    display: block;
  }
`;
const MessageBanner = styled.div<{
  show: boolean;
}>`
  width: 100%;
  height: ${(p) => (p.show ? "100px" : "0px")};
  background: url("https://blog-assets.jiandaoyun.com/index/outsourcing/leader_contest_m.png")
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
