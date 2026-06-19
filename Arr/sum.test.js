// sum.js
export function sum(a, b) {
  return a + b;
}

// sum.test.js
import { sum } from "./sum";

test("adds numbers correctly", () => {
  expect(sum(2, 3)).toBe(5);
});
