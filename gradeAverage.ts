import readline from "readline";

import { gradeAverage } from "./index.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question("Enter the first grade: ", (num1) => {
    rl.question("Enter the second grade: ", (num2) => {
      rl.question("Enter the third grade: ", (num3) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        const number3 = parseFloat(num3);

        if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
          console.log("Invalid input. Please enter valid numbers.");
        } else {
          const average = gradeAverage(number1, number2, number3);

          console.log(`Grade Average: ${average}`);
        }

        rl.close();
      });
    });
  });
}

main();
