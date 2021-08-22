import styled from "@emotion/styled";
import React, { useState } from "react";
import { TNode } from "./hooks";
import SearchPannel from "./search-pannel";
type Props = {
  defalutIdx?: number[];
  cityList: TNode[];
};
const Cascade = ({ defalutIdx, cityList }: Props) => {
  const [show, setShow] = useState(true);
  const [exist, setExist] = useState(true);
  const [searchContent, setSearchContent] = useState("");

  return (
    <Container>
      <Header>
        <SearchInput type="text" value={searchContent} readOnly />
        <i
          className="iconfont icon-icon-24-xiajiantou"
          onClick={() => {
            setShow(!show);
            setExist(true);
          }}
        ></i>
      </Header>
      <div style={{ display: show ? "block" : "none" }}>
        {exist && (
          <SearchPannel
            setSearchContent={setSearchContent}
            setShow={setShow}
            setExist={setExist}
            defaultIdx={defalutIdx}
            cityList={cityList}
          ></SearchPannel>
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid #333;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  i {
    box-sizing: border-box;
    display: inline-block;
    width: 30px;
    text-align: center;
    line-height: 28px;
    border: 1px solid #333;
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  width: calc(100% - 30px);
  height: 30px;
  box-sizing: border-box;
`;
export default Cascade;
