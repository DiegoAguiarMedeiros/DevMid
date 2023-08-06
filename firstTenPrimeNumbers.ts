import { firstTenPrimeNumbers } from "./index.js";

async function main() {
  console.log("Welcome to the first Ten Primes Numbers!");

  try {
    const tenPrimeNumbers = firstTenPrimeNumbers();
    tenPrimeNumbers.forEach((prime) => console.log(`${prime} is prime`));
  } catch (error) {
    console.error(error);
  }
}

main();
