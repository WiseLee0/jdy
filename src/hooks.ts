import { useCallback, useReducer } from "react";
import {
  APPEND,
  calcReducer,
  CALCULATE,
  CLEAR,
  PERCENTAGE,
  REVERSE,
} from "./reducer";

export const useCalc = (key = "0") => {
  const [state, dispatch] = useReducer(calcReducer, {
    cache: "",
    equation: key,
    isDecimal: false,
    isOperator: false,
    isStarted: false,
  });
  const append = useCallback(
    (key: string) => dispatch({ type: APPEND, key }),
    []
  );
  const clear = useCallback(() => dispatch({ type: CLEAR, key }), []);
  const calculate = useCallback(() => dispatch({ type: CALCULATE }), []);
  const reverse = useCallback(() => dispatch({ type: REVERSE }), []);
  const percentage = useCallback(() => dispatch({ type: PERCENTAGE }), []);

  return [
    state,
    {
      append,
      clear,
      calculate,
      reverse,
      percentage,
    },
  ] as const;
};
