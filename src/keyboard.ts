// 操作符
const one = {
  bgColor: "rgb(197,198,200)",
  color: "#666",
};
const two = {
  bgColor: "rgb(249,141,15)",
  color: "#fff",
};
// 数字类型
const three = {
  bgColor: "rgb(210,212,214)",
  color: "#444",
};
export const keys = [
  [
    {
      name: "C",
      ...one,
    },
    {
      name: "+/-",
      ...one,
    },
    {
      name: "%",
      ...one,
    },
    {
      name: "÷",
      ...two,
    },
  ],
  [
    {
      name: "7",
      ...three,
    },
    {
      name: "8",
      ...three,
    },
    {
      name: "9",
      ...three,
    },
    {
      name: "×",
      ...two,
    },
  ],
  [
    {
      name: "4",
      ...three,
    },
    {
      name: "5",
      ...three,
    },
    {
      name: "6",
      ...three,
    },
    {
      name: "-",
      ...two,
    },
  ],
  [
    {
      name: "1",
      ...three,
    },
    {
      name: "2",
      ...three,
    },
    {
      name: "3",
      ...three,
    },
    {
      name: "+",
      ...two,
    },
  ],
  [
    {
      name: "0",
      flex: 2,
      ...three,
    },
    {
      name: ".",
      ...three,
    },
    {
      name: "=",
      ...two,
    },
  ],
];
