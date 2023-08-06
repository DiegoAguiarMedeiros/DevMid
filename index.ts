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

export { calculator, isPrimeNumber, firstTenPrimeNumbers, factorial };
