import canIterate from "../canIterate";

test.each(
  [
    [new Set(), true],
    [new Map(), true],
    [null, false],
    [10, false],
    ["hello", true],
  ])("testing canIterate func for %s" , (object, expected)=>{
    const result = canIterate(object);
    expect(result).toEqual(expected);
  });