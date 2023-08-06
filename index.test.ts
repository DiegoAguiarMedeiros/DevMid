import { calculator } from "./index";

test("should accept 3 parrams", () => {
  calculator(1, 1, "+");
});

test("should return 2 on 1 , 1 , +", () => {
  expect(calculator(1, 1, "+")).toBe(2);
});

test("should return 0 on 1 , 1 , -", () => {
  expect(calculator(1, 1, "-")).toBe(0);
});

test("should return 8 on 4 , 2 , *", () => {
  expect(calculator(4, 2, "*")).toBe(8);
});

test("should return 2 on 4 , 2 , /", () => {
  expect(calculator(4, 2, "/")).toBe(2);
});
