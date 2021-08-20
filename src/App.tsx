import React from "react";
import Header from "./components/header";
import Mobile from "./components/mobile";
import Pc from "./components/pc";
import "./index.css";
function App() {
  return (
    <div>
      <Header></Header>
      <Pc></Pc>
      <Mobile></Mobile>
    </div>
  );
}

export default App;
