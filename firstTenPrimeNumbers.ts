import { firstTenPrimeNumbers } from "./index.js";

async function main() {
  console.log("Welcome to the factorial calculator!");

  try {
    const tenPrimeNumbers = firstTenPrimeNumbers();
    tenPrimeNumbers.forEach((prime) => console.log(`${prime} is prime`));
  } catch (error) {
    console.error(error);
  }
}

main();
