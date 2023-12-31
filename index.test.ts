import {
  calculator,
  isPrimeNumber,
  firstTenPrimeNumbers,
  factorial,
  isPalindrome,
  vowelCounter,
  gradeAverage,
  interestCalculation,
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

describe("Palindrome", () => {
  test("should accept a string as parameter", () => {
    isPalindrome("");
  });

  test("should return false if '' is passed as parameter", () => {
    expect(isPalindrome("")).toBe(false);
  });

  test("should return true if 'Amor a Roma' is passed as parameter", () => {
    expect(isPalindrome("Amor a Roma")).toBe(true);
  });

  test("Check if 'hello' is not a palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("Check if 'A man, a plan, a canal, Panama!' is a palindrome", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });
  test("Check if 'A man, a plan, a canal, Panama!' is a palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true);
  });
});

describe("Vowel Counter", () => {
  test("should return 1 from ab", () => {
    expect(vowelCounter("ab")).toBe(1);
  });

  test("should return 3 from ab", () => {
    expect(vowelCounter("ababa")).toBe(3);
  });

  test("should return 0 for an empty string", () => {
    expect(vowelCounter("")).toBe(0);
  });

  test("should return 0 for a string wtesth no vowels", () => {
    expect(vowelCounter("hll, wrld!")).toBe(0);
  });

  test("should return the correct number of vowels for a string wtesth vowels", () => {
    expect(vowelCounter("Hello, World!")).toBe(3);
    expect(vowelCounter("Programming is fun")).toBe(5);
  });

  test("should count both lowercase and uppercase vowels", () => {
    expect(vowelCounter("AeIoU")).toBe(5);
  });

  test("should ignore non-letter characters", () => {
    expect(vowelCounter("12345")).toBe(0);
    expect(vowelCounter("@#$%^&*")).toBe(0);
    expect(vowelCounter("Hello, 123 World!")).toBe(3);
  });
});
describe("Grade Average", () => {
  test("should return 2 on 2 2 2", () => {
    expect(gradeAverage(2, 2, 2)).toBe(2);
  });

  test("should return 0 for all grades as 0", () => {
    expect(gradeAverage(0, 0, 0)).toBe(0);
  });

  test("should return the correct average for positive grades", () => {
    expect(gradeAverage(85, 90, 78)).toBe(84.33);
    expect(gradeAverage(100, 95, 90)).toBe(95);
  });

  test("should handle negative grades", () => {
    expect(gradeAverage(-80, -90, -85)).toBe(-85);
  });
});

describe("Interest Calculation", () => {
  test("should return 0 when the investment time is 0", () => {
    const initialCapital = 1000;
    const interestRate = 5;
    const investmentTimeMonths = 0;
    expect(
      interestCalculation(initialCapital, interestRate, investmentTimeMonths)
    ).toBe(0);
  });

  test("should return the initial capital when the investment time is 1", () => {
    const initialCapital = 1000;
    const interestRate = 5;
    const investmentTimeMonths = 1;
    expect(
      interestCalculation(initialCapital, interestRate, investmentTimeMonths)
    ).toBe(1050);
  });

  test("should calculate the final value correctly for a given initial capital, interest rate, and investment time", () => {
    // Test case 1
    const initialCapital1 = 1000;
    const interestRate1 = 5;
    const investmentTimeMonths1 = 12;
    const expectedFinalValue1 = 1795.86;
    expect(
      interestCalculation(initialCapital1, interestRate1, investmentTimeMonths1)
    ).toBeCloseTo(expectedFinalValue1, 2);

    // Test case 2
    const initialCapital2 = 5000;
    const interestRate2 = 3.5;
    const investmentTimeMonths2 = 24;
    const expectedFinalValue2 = 11416.64;
    expect(
      interestCalculation(initialCapital2, interestRate2, investmentTimeMonths2)
    ).toBeCloseTo(expectedFinalValue2, 2);

    // Test case 3
    const initialCapital3 = 200;
    const interestRate3 = 10;
    const investmentTimeMonths3 = 6;
    const expectedFinalValue3 = 354.31;
    expect(
      interestCalculation(initialCapital3, interestRate3, investmentTimeMonths3)
    ).toBeCloseTo(expectedFinalValue3, 2);
  });
});
