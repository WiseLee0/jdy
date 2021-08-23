import styled from "@emotion/styled";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
type Props = {
  cellData: any[];
  row: number;
  col: number;
};
const Excel = ({ cellData, row, col }: Props) => {
  let [data, setData] = useState<any[]>([]);
  const [attribute, setAttribute] = useState<any>({});
  const [currentNode, setCurrentNode] = useState<any>({});
  const noSelectRef = useRef(null);
  const selectRef = useRef(null);
  const lineHeight = useRef(null);
  const lineWidth = useRef(null);
  const mouseStatus = useRef({
    isDown: false,
    selectNode: {},
    lastNode: {},
    timer: 0,
  });
  useEffect(() => {
    setData(cellData);
  }, [cellData]);
  function throttle(callback: (...args: any) => void, duration = 200) {
    return (...args: any[]) => {
      if (mouseStatus.current.timer) return;
      mouseStatus.current.timer = setTimeout(() => {
        callback(...args);
        mouseStatus.current.timer = 0;
      }, duration);
    };
  }
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const node = e.target as HTMLDivElement;
    if (!node.dataset.item) return;
    const nodeData = JSON.parse(node.dataset.item);
    data = data.map((d) => {
      if (d.index == nodeData.index) {
        d.selected = true;
        mouseStatus.current.selectNode = d;
      } else d.selected = false;
      return d;
    });
    setData([...data]);
    setCurrentNode(nodeData);
    mouseStatus.current.isDown = true;
  };
  const onMouseMove = throttle(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!mouseStatus.current.isDown) return;
      const selectNode = mouseStatus.current.selectNode as any;
      const node = e.target as HTMLDivElement;
      if (!node.dataset.item) return;
      const nodeData = JSON.parse(node.dataset.item);

      data = data.map((d) => {
        if (
          (d.rowStart >= selectNode.rowStart &&
            d.rowStart <= nodeData.rowStart &&
            d.colStart >= selectNode.colStart &&
            d.colStart <= nodeData.colStart) ||
          (d.rowStart <= selectNode.rowStart &&
            d.rowStart >= nodeData.rowStart &&
            d.colStart <= selectNode.colStart &&
            d.colStart >= nodeData.colStart)
        ) {
          d.selected = true;
        } else {
          d.selected = false;
        }
        return d;
      });
      setData([...data]);
    }
  );

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    mouseStatus.current.isDown = false;
    const node = e.target as HTMLDivElement;
    if (!node.dataset.item) return;
    const nodeData = JSON.parse(node.dataset.item);
    mouseStatus.current.lastNode = nodeData;
  };

  const onMerge = () => {
    if (!mouseStatus.current.selectNode) return;
    const selectNode = mouseStatus.current.selectNode as any;
    const lastNode = mouseStatus.current.lastNode as any;
    const temp: any[] = [];
    data.forEach((d) => {
      if (d.index == selectNode.index) {
        d.rowStart = Math.min(selectNode.rowStart, lastNode.rowStart);
        d.rowEnd = Math.max(selectNode.rowEnd, lastNode.rowEnd);
        d.colStart = Math.min(selectNode.colStart, lastNode.colStart);
        d.colEnd = Math.max(selectNode.colEnd, lastNode.colEnd);
        temp.push(d);
      } else if (!d.selected) {
        temp.push(d);
      }
    });
    setData(temp);
  };
  const onEidtText = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  const onMouseMoveStop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    data = data.map((d) => {
      if (d.index == currentNode.index) {
        d.text = e.target.value;
      }
      return d;
    });
    setCurrentNode({
      ...currentNode,
      text: e.target.value,
    });
    setData(data);
  };
  const onSetStyle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    attr: string
  ) => {
    const dom = e.target as HTMLInputElement;
    setAttribute({
      ...attribute,
      [attr]: dom.value,
    });
  };
  const onInputComfirm = (dom: HTMLInputElement, attr: string) => {
    setAttribute({
      ...attribute,
      [attr]: dom.value,
    });
  };
  return (
    <div>
      <Operate>
        <button onClick={onMerge} style={{ width: "100px" }}>
          合并
        </button>
        <div>
          <span>未选中边框颜色： </span>
          <input type="text" ref={noSelectRef} defaultValue="#333" />
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => onInputComfirm(noSelectRef.current!, "borderColor1")}
          >
            确定
          </button>
        </div>
        <div>
          <span>选中边框颜色： </span>
          <input type="text" ref={selectRef} defaultValue="#f00" />
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => onInputComfirm(selectRef.current!, "borderColor2")}
          >
            确定
          </button>
        </div>
        <div onClick={(e) => onSetStyle(e, "fontWeight")}>
          <span>加粗： </span>
          <label htmlFor="lighter">lighter</label>
          <input
            id="lighter"
            type="radio"
            name="bold"
            style={{ marginRight: "20px" }}
            value="lighter"
          />
          <label htmlFor="normal">normal</label>
          <input
            id="normal"
            type="radio"
            name="bold"
            style={{ marginRight: "20px" }}
            value="normal"
            defaultChecked
          />
          <label htmlFor="bold">bold</label>
          <input
            id="bold"
            type="radio"
            name="bold"
            style={{ marginRight: "20px" }}
            value="bold"
          />
          <label htmlFor="bolder">bolder</label>
          <input
            id="bolder"
            type="radio"
            name="bold"
            style={{ marginRight: "20px" }}
            value="bolder"
          />
        </div>
        <div onClick={(e) => onSetStyle(e, "italic")}>
          <span>斜体： </span>
          <label htmlFor="normalitalic">normal</label>
          <input
            id="normalitalic"
            type="radio"
            name="italic"
            style={{ marginRight: "20px" }}
            value="normal"
            defaultChecked
          />
          <label htmlFor="italic">italic</label>
          <input
            id="italic"
            type="radio"
            name="italic"
            style={{ marginRight: "20px" }}
            value="italic"
          />
        </div>
        <div onClick={(e) => onSetStyle(e, "underline")}>
          <span>下划线： </span>
          <label htmlFor="noneUnder">none</label>
          <input
            id="noneUnder"
            type="radio"
            name="underline"
            style={{ marginRight: "20px" }}
            value="none"
            defaultChecked
          />
          <label htmlFor="underline">underline</label>
          <input
            type="radio"
            name="underline"
            style={{ marginRight: "20px" }}
            value="underline"
          />
        </div>
        <div onClick={(e) => onSetStyle(e, "textAlign")}>
          <span>对其方式： </span>
          <label htmlFor="center">center</label>
          <input
            id="center"
            type="radio"
            name="textAlign"
            style={{ marginRight: "20px" }}
            value="center"
            defaultChecked
          />
          <label htmlFor="left">left</label>
          <input
            id="left"
            type="radio"
            name="textAlign"
            style={{ marginRight: "20px" }}
            value="left"
          />
          <label htmlFor="right">right</label>
          <input
            id="right"
            type="radio"
            name="textAlign"
            style={{ marginRight: "20px" }}
            value="right"
          />
        </div>
        <div>
          <span>行高： </span>
          <input type="text" ref={lineHeight} defaultValue="30" />
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => onInputComfirm(lineHeight.current!, "lineHeight")}
          >
            确定
          </button>
        </div>
        <div>
          <span>列宽： </span>
          <input type="text" ref={lineWidth} defaultValue={200} />
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => onInputComfirm(lineWidth.current!, "lineWidth")}
          >
            确定
          </button>
        </div>
        <div>
          <span>单元格值： </span>
          <input type="text" value={currentNode.text} onChange={onChangeText} />
        </div>
      </Operate>
      <Container
        row={row}
        col={col}
        attr={attribute}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {data.map((item, index) => (
          <Cell
            {...item}
            key={index}
            data-item={JSON.stringify(item)}
            attr={attribute}
          >
            <span
              style={{ userSelect: "none" }}
              onMouseDown={onEidtText}
              onMouseMove={onMouseMoveStop}
              data-item={JSON.stringify(item)}
            >
              {item.text}
            </span>
          </Cell>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div<{
  col: number;
  row: number;
  attr?: any;
}>`
  display: grid;
  width: ${(props) => {
    if (!props.attr.lineWidth) return "600px";
    else return `${props.attr.lineWidth * props.col}px`;
  }};
  grid-template-columns: repeat(${(props) => props.row}, 1fr);
  grid-template-rows: repeat(${(props) => props.col}, 1fr);
  border: ${(props) => {
    if (!props.attr.borderColor1) return "1px solid #333";
    else return `1px solid ${props.attr.borderColor1}`;
  }};
`;
const Operate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  > div,
  > button {
    margin-bottom: 20px;
  }
`;
const Cell = styled.div<{
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
  selected?: boolean;
  attr?: any;
}>`
  border: ${(props) => {
    if (props.selected) {
      if (props.attr.borderColor2)
        return `1px solid ${props.attr.borderColor2}`;
      else return "1px solid #f00";
    }
    if (!props.attr.borderColor1) return "1px solid #333";
    else return `1px solid ${props.attr.borderColor1}`;
  }};
  font-weight: ${(props) =>
    props.attr.fontWeight ? props.attr.fontWeight : "normal"};
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  line-height: ${(props) =>
    props.attr.lineHeight ? `${props.attr.lineHeight}px` : "30px"};
  height: ${(props) =>
    props.attr.lineHeight ? `${props.attr.lineHeight}px` : "30px"};
  font-style: ${(props) => (props.attr.italic ? props.attr.italic : "normal")};
  text-decoration: ${(props) =>
    props.attr.underline ? props.attr.underline : "none"};
  text-align: ${(props) =>
    props.attr.textAlign ? props.attr.textAlign : "center"};
`;
export default Excel;
