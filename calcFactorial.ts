import readline from "readline";
import { factorial } from "./index.js";

function askForNumber(): Promise<number> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question("Enter a number to calculate the factorial: ", (answer) => {
      rl.close();
      const number = parseFloat(answer);
      if (isNaN(number)) {
        reject(new Error("Invalid input. Please enter a valid number."));
      } else {
        resolve(number);
      }
    });
  });
}

async function main() {
  console.log("Welcome to the factorial calculator!");

  try {
    const number = await askForNumber();
    console.log(`The Factorial of ${number} is ${factorial(number)}`);
  } catch (error) {
    console.error(error);
  }
}

main();
