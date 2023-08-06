const calculator = (
  a: number,
  b: number,
  operator: "+" | "-" | "*" | "/"
): number | string => {
  const operation = {
    "+": a + b,
    "-": a - b,
    "/": b === 0 ? "cannot divide by zero" : a / b,
    "*": a * b,
  };
  return operation[operator];
};

export { calculator };
