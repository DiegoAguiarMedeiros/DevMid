import {
  calculator,
  isPrimeNumber,
  firstTenPrimeNumbers,
  factorial,
} from "./index";

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
  test("should return false to number 2,3,5,7", () => {
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(3)).toBe(true);
    expect(isPrimeNumber(5)).toBe(true);
    expect(isPrimeNumber(7)).toBe(true);
  });

  test("should return false for negative numbers", () => {
    expect(isPrimeNumber(-2)).toBe(false);
    expect(isPrimeNumber(-3)).toBe(false);
    expect(isPrimeNumber(-7)).toBe(false);
  });

  test("should return false for decimal numbers", () => {
    expect(isPrimeNumber(3.14)).toBe(false);
    expect(isPrimeNumber(1.5)).toBe(false);
  });
});

describe("first 10 prime numbers", () => {
  test("should return first 10 prime numbers", () => {
    const firstTenPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(firstTenPrimeNumbers()).toStrictEqual(firstTenPrime);
  });
});
describe("Factorial", () => {
  test("should return 120 factorial of 5", () => {
    expect(factorial(5)).toBe(120);
  });
  test("should return 3628800  factorial of 10", () => {
    expect(factorial(10)).toBe(3628800);
  });
  test("should return 1  factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });
});
