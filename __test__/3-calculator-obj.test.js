const calculator = require("../katas/3-calculator-obj")

describe("calcultator object", () => {
  test("should contains functions for basic operations", () => {
    expect(calculator.hasOwnProperty("add")).toBeTruthy();
    expect(calculator.hasOwnProperty("subtract")).toBeTruthy();
    expect(calculator.hasOwnProperty("divide")).toBeTruthy();
    expect(calculator.hasOwnProperty("multiply")).toBeTruthy();
  });

  test("the basic operations should take two numbers and return the correct calculation", () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.subtract(10, 1)).toBe(9);
    expect(calculator.divide(100, 2)).toBe(50);
    expect(calculator.multiply(50, 2)).toBe(100);

  })
})