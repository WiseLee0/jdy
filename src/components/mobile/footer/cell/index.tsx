import styled from "@emotion/styled";
import React from "react";
type Props = {
  title: string;
  data: string[];
  tip?: {
    index: number[];
    content: string[];
  };
};
const FooterCell = ({ title, data, tip }: Props) => {
  return (
    <Container>
      <span>{title}</span>
      <List>
        {data.map((d, index) => (
          <span key={index}>
            {d}
            {tip && (
              <Tip show={tip.index.includes(index)}>{tip.content[index]}</Tip>
            )}
          </span>
        ))}
      </List>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  > span:nth-of-type(1) {
    font-size: 14px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: #91a1b7;
    border-bottom: 1px solid #5e6d82;
    position: relative;
    width: 56px;
    font-weight: 600;
    margin-top: 10px;
    ::after {
      content: "";
      display: block;
      width: 1em;
      height: 1px;
      background: #0db3a6;
      bottom: -1px;
      position: absolute;
    }
  }
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  span {
    margin-right: 15px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    color: #c3cdda;
  }
`;
const Tip = styled.div<{
  show: boolean;
}>`
  display: ${(p) => (p.show ? "block" : "none")};
  position: relative;
  color: #91a1b7;
  font-size: 12px;
  margin-left: 60px;
`;
export default FooterCell;
