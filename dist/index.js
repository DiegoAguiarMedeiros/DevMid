const calculator = (a, b, operator) => {
    const operation = {
        "+": a + b,
        "-": a - b,
        "/": b === 0 ? "cannot divide by zero" : a / b,
        "*": a * b,
    };
    return operation[operator];
};
const isPrimeNumber = (a) => {
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
const firstTenPrimeNumbers = () => {
    const returnFirstTenPrimeNumbers = [];
    let number = 0;
    do {
        if (isPrimeNumber(number))
            returnFirstTenPrimeNumbers.push(number);
        number++;
    } while (returnFirstTenPrimeNumbers.length < 10);
    return returnFirstTenPrimeNumbers;
};
const factorial = (a) => {
    let returnFactorial = 1;
    let count = a;
    while (count >= 1) {
        returnFactorial = returnFactorial * count;
        count--;
    }
    return returnFactorial;
};
export { calculator, isPrimeNumber, firstTenPrimeNumbers, factorial };
