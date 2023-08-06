import readline from "readline";
import { vowelCounter } from "./index.js";

function askForASentence(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question(
      "Enter a sentence to see how many vowel there are: ",
      (answer) => {
        rl.close();
        resolve(answer);
      }
    );
  });
}

async function main() {
  console.log("Welcome to the Vowel Counter!");

  try {
    const text = await askForASentence();
    const vowelsNumber = vowelCounter(text);
    console.log(
      `There ${
        vowelsNumber > 1
          ? `are ${vowelsNumber} vowels`
          : `is ${vowelsNumber} vowel`
      }  in the sentence ${text} `
    );
  } catch (error) {
    console.error(error);
  }
}

main();
