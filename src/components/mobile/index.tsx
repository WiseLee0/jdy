import styled from "@emotion/styled";
import React from "react";

export default function Mobile() {
  return <Container>mobile</Container>;
}

const Container = styled.div`
  @media (min-width: 450px) {
    display: none;
  }
  @media not all and (min-width: 450px) {
    display: block;
  }
`;
