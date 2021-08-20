import React, { useReducer, useState } from "react";
import { Cell, CellGroup, Control, View, ViewCell } from "./lib";
import { keys } from "./keyboard";
import { useCalc } from "./hooks";

function App() {
  const [state, { append, clear, calculate, reverse, percentage }] = useCalc();

  const onHandleKeyBoard = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const dom = event.target as HTMLElement;
    let key = dom.getAttribute("name")!;
    switch (key) {
      case "C":
        clear();
        break;
      case "=":
        calculate();
        break;
      case "+/-":
        reverse();
        break;
      case "%":
        percentage();
        break;
      default:
        append(key);
    }
  };

  return (
    <div style={{ backgroundColor: "#333" }}>
      <View>
        <ViewCell>{state.cache}</ViewCell>
        <ViewCell style={{ fontSize: "68px" }}>{state.equation}</ViewCell>
      </View>
      <Control onClick={onHandleKeyBoard}>
        {keys.map((key, index) => {
          return (
            <CellGroup key={index}>
              {key.map((item) => {
                return (
                  <Cell {...item} key={item.name}>
                    {item.name}
                  </Cell>
                );
              })}
            </CellGroup>
          );
        })}
      </Control>
    </div>
  );
}

export default App;
