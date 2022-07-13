import convert from "./src/DFS/convert";

const demoDFS = () => {
  const data = {
    a: {
      b: {
        c: "202207068876",
        v: 1,
      },
      v: 1,
    },
    arr: [
      {
        a: "202207068876",
        v: 1,
      },
      {
        a: "202207068876",
      },
    ],
    k: "123",
  };
  const convertKeys = ["a.b.c", "arr.a"];

  console.log(data);
  convert(data, convertKeys);
  console.log(data);
};

const main = async () => {
  demoDFS();
  // console.log(require("./src/reactDom"));
};

main();
