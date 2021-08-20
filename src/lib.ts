import styled from "@emotion/styled";

export const Cell = styled.div<{
  bgColor?: string;
  color?: string;
  width?: number;
  height?: number;
  flex?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.width ? `${props.height}px` : "auto")};
  background: ${(props) =>
    props.bgColor ? props.bgColor : "rgb(213,214,216)"};
  color: ${(props) => (props.color ? props.color : "#333")};
  font-size: 24px;
  border: 1px solid #999;
  box-sizing: border-box;
  border-radius: 4px;
  :active {
    box-shadow: -4px -4px 15px -8px rgba(255, 0, 0, 1) inset,
      4px 4px 15px -8px rgba(0, 0, 0, 0.3) inset;
  }
`;
export const CellGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
export const Control = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 70vh;
`;
export const View = styled.div`
  box-sizing: border-box;
  height: 30vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const ViewCell = styled.span<{
  size?: number;
}>`
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  font-size: ${(props) => (props.size ? props.size : "42px")};
  min-height: 60px;
  color: #fff;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
`;
