var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import readline from "readline";
import { factorial } from "./index.js";
function askForNumber() {
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
            }
            else {
                resolve(number);
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Welcome to the factorial calculator!");
        try {
            const number = yield askForNumber();
            console.log(`The Factorial of ${number} is ${factorial(number)}`);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
