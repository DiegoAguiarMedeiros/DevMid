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

const isPrimeNumber = (a: number) => {
  if (!Number.isInteger(a)) {
    return false;
  }
  if (a <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const firstTenPrimeNumbers = (): number[] => {
  const returnFirstTenPrimeNumbers: number[] = [];
  let number = 0;
  do {
    if (isPrimeNumber(number)) returnFirstTenPrimeNumbers.push(number);
    number++;
  } while (returnFirstTenPrimeNumbers.length < 10);
  return returnFirstTenPrimeNumbers;
};

const factorial = (a: number): number => {
  let returnFactorial: number = 1;
  let count: number = a;
  while (count >= 1) {
    returnFactorial = returnFactorial * count;
    count--;
  }
  return returnFactorial;
};

const isPalindrome = (text: string): boolean => {
  if (text === "") return false;
  let reverseText = text.split("").reverse();

  let textLowerCaseTrimmed = text
    .replaceAll(" ", "")
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();
  let reverseTextLowerCaseTrimmed = reverseText
    .join("")
    .replaceAll(" ", "")
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();

  return textLowerCaseTrimmed === reverseTextLowerCaseTrimmed;
};

const vowelCounter = (text: string): number => {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

const gradeAverage = (a: number, b: number, c: number): number => {
  return Number(((a + b + c) / 3).toFixed(2));
};
const interestCalculation = (
  initialCapital: number,
  interestRate: number,
  investmentTimeMonths: number
): number => {
  if (investmentTimeMonths === 0) {
    return 0;
  }
  const interestRateDecimal = interestRate / 100;
  const finalValue =
    initialCapital * Math.pow(1 + interestRateDecimal, investmentTimeMonths);
  return Math.round(finalValue * 100) / 100;
};

export {
  calculator,
  isPrimeNumber,
  firstTenPrimeNumbers,
  factorial,
  isPalindrome,
  vowelCounter,
  gradeAverage,
  interestCalculation,
};
