import readline from "readline";

import { interestCalculation } from "./index.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question("Enter the initial capital: ", (num1) => {
    rl.question("Enter the interest rate: ", (num2) => {
      rl.question("Enter the investment time in months: ", (num3) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        const number3 = parseFloat(num3);

        if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
          console.log("Invalid input. Please enter valid numbers.");
        } else {
          const interest = interestCalculation(number1, number2, number3);

          console.log(`The final value is : ${interest}`);
        }

        rl.close();
      });
    });
  });
}

main();
