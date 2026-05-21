import { sum } from "./sum.js";

test("sum works correctly", () => {
  expect(sum(10, 10)).toBe(20);
});