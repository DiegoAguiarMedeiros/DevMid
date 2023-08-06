import { calculator, isPrimeNumber } from "./index";

describe("calculator function", () => {
  test("should accept 3 parrams", () => {
    calculator(1, 1, "+");
  });

  test("should return 2 on 1 , 1 , +", () => {
    expect(calculator(1, 1, "+")).toBe(2);
  });

  test("should return 0 on 1 , 1 , -", () => {
    expect(calculator(1, 1, "-")).toBe(0);
  });

  test("should return 8 on 4 , 2 , *", () => {
    expect(calculator(4, 2, "*")).toBe(8);
  });

  test("should return 2 on 4 , 2 , /", () => {
    expect(calculator(4, 2, "/")).toBe(2);
  });

  test("should return cannot divide by zero on 4 , 0 , /", () => {
    expect(calculator(4, 0, "/")).toBe("cannot divide by zero");
  });

  test("should return undefined or error message for invalid operator", () => {
    expect(calculator(2, 3, "^")).toBeUndefined();
  });

  test("should correctly handle negative numbers", () => {
    expect(calculator(-2, 3, "+")).toBe(1);
  });
});

describe("Prime Numbers", () => {
  test("should return false to number 1", () => {
    expect(isPrimeNumber(1)).toBe(false);
  });

  test("should return false to number 4,6,8,9", () => {
    expect(isPrimeNumber(4)).toBe(false);
    expect(isPrimeNumber(6)).toBe(false);
    expect(isPrimeNumber(6)).toBe(false);
    expect(isPrimeNumber(9)).toBe(false);
  });
});
