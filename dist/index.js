var calculator = function (a, b, operator) {
    var operation = {
        "+": a + b,
        "-": a - b,
        "/": b === 0 ? "cannot divide by zero" : a / b,
        "*": a * b,
    };
    return operation[operator];
};
var isPrimeNumber = function (a) {
    if (!Number.isInteger(a)) {
        return false;
    }
    if (a <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
};
var firstTenPrimeNumbers = function () {
    var returnFirstTenPrimeNumbers = [];
    var number = 0;
    do {
        if (isPrimeNumber(number))
            returnFirstTenPrimeNumbers.push(number);
        number++;
    } while (returnFirstTenPrimeNumbers.length < 10);
    return returnFirstTenPrimeNumbers;
};
var factorial = function (a) {
    var returnFactorial = 1;
    var count = a;
    while (count >= 1) {
        returnFactorial = returnFactorial * count;
        count--;
    }
    return returnFactorial;
};
var isPalindrome = function (text) {
    if (text === "")
        return false;
    var reverseText = text.split("").reverse();
    var textLowerCaseTrimmed = text
        .replaceAll(" ", "")
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase();
    var reverseTextLowerCaseTrimmed = reverseText
        .join("")
        .replaceAll(" ", "")
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase();
    return textLowerCaseTrimmed === reverseTextLowerCaseTrimmed;
};
export default isPalindrome;
export { calculator, isPrimeNumber, firstTenPrimeNumbers, factorial, isPalindrome, };
