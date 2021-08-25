import styled from "@emotion/styled";
import React, { useState } from "react";
import { themeColor } from "../../../common/style";
import { navData } from "../data";
type Props = {
  onClose: () => void;
};
const Slieder = ({ onClose }: Props) => {
  const [list, setList] = useState(navData);
  const onHandleOpen = (index: number) => {
    if (list[index].show == undefined) return;
    if (list[index].show == false) {
      list[index].show = true;
      list[index].arrow = "up";
    } else {
      list[index].show = false;
      list[index].arrow = "down";
    }
    setList([...list]);
  };
  return (
    <Container>
      <Left onClick={onClose}></Left>
      <Right>
        {list.map((data, index) => (
          <>
            <LinkButton
              key={index}
              arrow={data.arrow}
              light={data.light}
              onClick={() => onHandleOpen(index)}
            >
              {data.name}
            </LinkButton>
            {data.data && data.show && (
              <List key={index}>
                {data.data.map((item, idx) => (
                  <Cell key={idx}>
                    <span>
                      {item.name}
                      <span>{item.char}</span>
                    </span>
                  </Cell>
                ))}
              </List>
            )}
          </>
        ))}
      </Right>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
`;
const Left = styled.div`
  width: 40%;
  background-color: rgba(0, 0, 0, 0.25);
`;
const Right = styled.div`
  width: 60%;
  background-color: #fff;
  overflow: scroll;
`;
const LinkButton = styled.div<{
  arrow?: string;
  light?: boolean;
}>`
  padding: 19px 15px;
  font-size: 16px;
  color: ${(props) => (props.light ? themeColor : "#444")};
  cursor: pointer;
  position: relative;
  margin-right: ${(props) => (props.arrow ? "20px" : "0")};
  background-color: #fff;
  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    border-color: ${(props) => {
      if (props.arrow == "down") {
        return "#444 transparent transparent  transparent";
      } else if (props.arrow == "up") {
        return "transparent transparent #444  transparent";
      }
      return "";
    }};
    border-style: ${(props) => (props.arrow?.length ? "solid" : "")};
    border-width: ${(props) => {
      if (props.arrow == "down") {
        return "5px 5px 0 5px";
      } else if (props.arrow == "up") {
        return "0 5px 5px 5px";
      }
      return "";
    }};
    height: 0;
    width: 0;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f6f9;
`;
const Cell = styled.div<{
  char?: string;
}>`
  display: block;
  color: #474b51;
  font-weight: 400;
  line-height: 48px;
  border-radius: 5px;
  > span {
    position: relative;
    > span {
      position: absolute;
      right: -28px;
      top: -25px;
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
export default Slieder;
