const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("if commas work", () => {
    expect("1000000").toEqual("1,000,000");
  });
  test("misplaced commas", () => {
    expect("2345678").not.toEqual("234,567,8")
  })
});
