const reverseString = require("../katas/2-reverseString")

describe("reverseString()", () => {
  test("should return a string", () => {
    expect(typeof reverseString()).toBe("string")
  });

  test("should return a string in a reversed order", () => {
    expect(reverseString("ab")).toEqual("ba");
    expect(reverseString("abc")).toEqual("cba");
    expect(reverseString("hello")).toEqual("olleh")
  })
})