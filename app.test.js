const countDown = require("./app");

describe("tests for countDown function", () => {
  it("should count down the positive integer", () => {
    expect(countDown(6)).toBe("654321");
  });
  it("should tell the user that the number is less than 1", () => {
    expect(countDown(-1)).toBe("Ваше число меньше 1");
  });
  it("should tell the user that the number is a float", () => {
    expect(countDown(8.6)).toBe("Ваше число дробное");
  });
});
