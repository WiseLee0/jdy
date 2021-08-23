import React, { useEffect, useRef, useState } from "react";
import Excel from "./excel";

function App() {
  const rowRef = useRef<HTMLInputElement>(null);
  const colRef = useRef<HTMLInputElement>(null);
  const [cellData, setCellData] = useState<any[]>([]);
  const onGenerate = () => {
    const row = parseInt(rowRef.current!.value);
    const col = parseInt(colRef.current!.value);
    const data = [];
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        data.push({
          text: (i - 1) * (row + 1) + j,
          rowStart: i,
          rowEnd: i + 1,
          colStart: j,
          colEnd: j + 1,
          index: (i - 1) * (row + 1) + j,
          selected: false,
        });
      }
    }
    setCellData(data);
  };
  return (
    <div>
      <div>
        <span>行 </span>
        <input type="text" ref={rowRef} />
      </div>
      <div>
        <span>列 </span>
        <input type="text" ref={colRef} />
      </div>
      <button onClick={onGenerate} style={{ margin: "20px 0 50px 0" }}>
        生成
      </button>
      <Excel
        cellData={cellData}
        row={parseInt(colRef.current?.value || "0")}
        col={parseInt(rowRef.current?.value || "0")}
      ></Excel>
    </div>
  );
}

export default App;
