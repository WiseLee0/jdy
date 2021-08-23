import styled from "@emotion/styled";
import React from "react";
import Swiper from "../swiper";
import TextAuto from "../text-auto";

export default function Pc() {
  return (
    <Container>
      <Recommend>
        <TextAuto></TextAuto>
        <img
          style={{ width: "650px" }}
          src="https://blog-assets.jiandaoyun.com/index/outsourcing/2020jdy-indexbannera.png"
        />
      </Recommend>
      <Swiper></Swiper>
    </Container>
  );
}

const Container = styled.div`
  @media (min-width: 1200px) {
    display: block;
  }
  @media not all and (min-width: 450px) {
    display: none;
  }
`;
const Recommend = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 50px 0 130px;
  box-sizing: border-box;
  margin: 0 auto;
`;
