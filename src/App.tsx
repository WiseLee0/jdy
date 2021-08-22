import React from "react";
import Cascade from "./cascade";
import { cityList } from "./data";

function App() {
  return (
    <div style={{ width: "300px" }}>
      <Cascade defalutIdx={[1, 1, 2]} cityList={cityList}></Cascade>
    </div>
  );
}

export default App;
