const ceaserCipher = require("../katas/4-ceaserCipher")

describe("ceaserCipher()", () => {
  test("should return a string", () => {
    expect(typeof ceaserCipher()).toBe("string")
  });
  test("when passed with a single letter, it should return that letter shifted by 1", () => {
    expect(ceaserCipher("a")).toBe("b");
    expect(ceaserCipher("c")).toBe("d")
  });
  test("when passed with two arguements, 1 simple word and a number, it should return that word with each character shifted by that number", () => {
    expect(ceaserCipher("ab", 1)).toBe("bc");
    expect(ceaserCipher("cat", 3)).toBe("fdw");
    expect(ceaserCipher("hello", 3)).toBe("khoor")
  });

  test("if a string contains a letter that is uppercase, the shifted letter should also be uppercase", () => {
    expect(ceaserCipher("Abc", 2)).toBe("Cde");
    expect(ceaserCipher("HELLo", 3)).toBe("KHOOr")
  })
  test("if a string contains whitespaces, it should return return preserve it", () => {
    expect(ceaserCipher("A B", 1)).toBe("B C");
    expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(ceaserCipher("Yes...?", 1)).toBe("Zft...?")
  })
  test("if a shift reaches the letter z, it should wrap", () => {
    expect(ceaserCipher("xyz", 3)).toBe("abc")
  })
})