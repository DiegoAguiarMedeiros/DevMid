const calculator = (a: number, b: number, operator: "+" | "-" | "*" | "/") => {
  const operation = {
    "+": a + b,
    "-": a - b,
    "/": a + b,
    "*": a + b,
  };
  return operation[operator];
};

export { calculator };
