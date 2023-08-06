import { calculator } from "./index";

test("should import calculator", () => {
  calculator();
});
test("should accept 3 parrams", () => {
  calculator(1, 1, "+");
});
