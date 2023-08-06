import readline from "readline";
import { isPalindrome } from "./index.js";

function askForASentence(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question("Enter a sentence to see if it is a Palindrome: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  console.log("Welcome to the Palindrome check!");

  try {
    const text = await askForASentence();
    console.log(
      `The sentence ${text} ${
        isPalindrome(text) ? "is a Palindrome" : "is not a Palindrome"
      }`
    );
  } catch (error) {
    console.error(error);
  }
}

main();
