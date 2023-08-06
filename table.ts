import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMultiplicationTable(number: number) {
  console.log(`Multiplication Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

function getUserInput() {
  rl.question('Enter a number: ', (input) => {
    const number = parseInt(input, 10);

    if (isNaN(number)) {
      console.log('Invalid input. Please enter a valid number.');
    } else {
      displayMultiplicationTable(number);
    }

    rl.close();
  });
}

getUserInput();
