export const APPEND = "APPEND";
export const CLEAR = "CLEAR";
export const CALCULATE = "CALCULATE";
export const REVERSE = "REVERSE";
export const PERCENTAGE = "PERCENTAGE";

export type State = {
  cache: string;
  equation: string;
  isDecimal: boolean;
  isOperator: boolean;
  isStarted: boolean;
};

export type Action = {
  key?: string;
  type:
    | typeof APPEND
    | typeof CLEAR
    | typeof CALCULATE
    | typeof REVERSE
    | typeof PERCENTAGE;
};
function isFourArithmetic(key: string) {
  return ["+", "-", "×", "÷"].includes(key);
}
function calculateFn(equation: string, isStarted: boolean, special = "") {
  const end = equation.slice(-1);

  if (isFourArithmetic(end)) equation = equation.slice(0, -1);
  const cache = special.length ? special : equation;
  equation = equation.replace(/×/g, "*").replace(/÷/g, "/");
  equation = parseFloat(eval(equation).toFixed(6)).toString();
  return {
    cache,
    equation,
    isDecimal: false,
    isOperator: false,
    isStarted,
  };
}
export const calcReducer = (state: State, action: Action) => {
  let { equation, isDecimal, isStarted, isOperator, cache } = state;
  const { key } = action;
  switch (action.type) {
    case APPEND: {
      if (!key) return state;
      if (equation === "0" && !isFourArithmetic(key)) {
        if (key === ".") {
          equation += key;
          isDecimal = true;
        } else {
          equation = key;
        }

        isStarted = true;
        return {
          cache,
          equation,
          isDecimal,
          isStarted,
          isOperator,
        };
      }

      if (!isFourArithmetic(key)) {
        if (key === "." && isDecimal) {
          return {
            cache,
            equation,
            isDecimal,
            isStarted,
            isOperator,
          };
        }

        if (key === ".") {
          isDecimal = true;
          isOperator = true;
        } else {
          isOperator = false;
        }
        equation += key;

        if (key === "." && /\d+\.\d+\./.test(equation)) {
          equation = equation.slice(0, -1);
        }
      }

      if (isFourArithmetic(key) && !isOperator) {
        equation += key;
        isDecimal = false;
        isOperator = true;
      }
      if (isFourArithmetic(key) && isOperator) {
        equation = equation.slice(0, -1) + key;
      }
      return {
        cache,
        equation,
        isDecimal,
        isStarted,
        isOperator,
      };
    }

    case CLEAR: {
      return {
        cache: "",
        equation: "0",
        isDecimal: false,
        isOperator: false,
        isStarted: false,
      };
    }

    case CALCULATE:
      return calculateFn(equation, isStarted);

    case REVERSE: {
      if (isOperator || !isStarted) return state;
      const special = `-(${equation})`;
      equation = equation + "* -1";
      return calculateFn(equation, isStarted, special);
    }

    case PERCENTAGE: {
      if (isOperator || !isStarted) return state;
      const special = equation + "%";
      equation = equation + "* 0.01";
      return calculateFn(equation, isStarted, special);
    }

    default:
      return state;
  }
};
