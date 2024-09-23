const exp = require("constants");
const capitalize = require("../katas/1-capitalize")

describe("capitalize()", () => {
  test("should return a string", () => {
    expect(typeof capitalize()).toBe("string")
  });
  test("if passed with a single letter, it should return this letter capitalized", () => {
    expect(capitalize("a")).toEqual("A");
    expect(capitalize("b")).toEqual("B")
  })

  test("if passed with a word with multiple character, it should return the first letter capitalized", () => {
    expect(capitalize("ab")).toEqual("Ab");
    expect(capitalize("ba")).toEqual("Ba");
    expect(capitalize("hello")).toEqual("Hello")
  })
})