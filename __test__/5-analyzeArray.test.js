const analyzeArray = require("../katas/5-analyzeArray")

describe("analyzeArray()", () => {
  test("should return an object", () => {
    expect(analyzeArray()).toBeObject();
  });
  test("should have a method of length that returns a number", () => {
    expect(analyzeArray()).toContainKey(["length"]);
    expect(analyzeArray().length).toBeNumber();
  });
  test("should have a method of min that returns a number", () => {
    expect(analyzeArray()).toContainKey(["min"]);
    expect(analyzeArray().min).toBeNumber();
  });
  test("should have a method of max that returns a number", () => {
    expect(analyzeArray()).toContainKey(["max"]);
    expect(analyzeArray().max).toBeNumber();
  });
  test("should have a method of average that returns a number", () => {
    expect(analyzeArray()).toContainKey(["average"]);
    expect(analyzeArray().average).toBeNumber();
  })
  // ---> length
  describe("length", () => {
    test("if passed with an empty array it should return 0", () => {
      const testArr = analyzeArray([]);
      expect(testArr.length).toBe(0);
    });
    test("if passed with an array containing a single value it should return 1", () => {
      const testArr = analyzeArray([1]);
      expect(testArr.length).toBe(1);
    });
    test("if passed with an array with multiple values, it should return the length of the array", () => {
      const testArr = analyzeArray([1, 2, 3]);
      expect(testArr.length).toBe(3);
    });
  });

  // ---> min 
  describe("min", () => {
    test("if passed with an empty array, it should return 0", () => {
      const testArr = analyzeArray([]);
      expect(testArr.min).toBe(0);
    });
    test("if passed with an array containing a single value it should return that value", () => {
      const testArr = analyzeArray([5]);
      expect(testArr.min).toBe(5);
    });
    test("if passed with an array with multiple values, it should return the smallest value of the array", () => {
      const testArr = analyzeArray([1, 2, 3]);
      expect(testArr.min).toBe(1);
    });
  });

  // ---> max 
  describe("max", () => {
    test("if passed with an empty array, it should return 0", () => {
      const testArr = analyzeArray([]);
      expect(testArr.max).toBe(0);
    });
    test("if passed with an array containing a single value it should return that value", () => {
      const testArr = analyzeArray([5]);
      expect(testArr.max).toBe(5);
    });
    test("if passed with an array with multiple values, it should return the smallest value of the array", () => {
      const testArr = analyzeArray([1, 2, 3]);
      expect(testArr.max).toBe(3);
    });
  });

  // ---> average 
  describe("average", () => {
    test("if passed with an empty array, it should return 0", () => {
      const testArr = analyzeArray([]);
      expect(testArr.average).toBe(0);
    });
    test("if passed with an array containing a single value it should return that value", () => {
      const testArr = analyzeArray([5]);
      expect(testArr.average).toBe(5);
    });
    test("if passed with an array with multiple values, it should return the average value of the array", () => {
      const testArr = analyzeArray([10, 20, 30, 40]);
      expect(testArr.average).toBe(25)
    });
  });
});