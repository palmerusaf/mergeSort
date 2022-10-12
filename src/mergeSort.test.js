import { mergeArrays, mergeSort, splitArray } from "./mergeSort";

describe("splitArray tests", () => {
  const zeroArray = [];
  const oneArray = [3];
  const twoArray = [4, 3];
  const threeArray = [...oneArray, ...twoArray];
  const fourArray = [...twoArray, ...twoArray];
  const fiveArray = [...twoArray, ...threeArray];

  it("returns array of two arrays", () => {
    expect(splitArray(zeroArray).length).toEqual(2);
    expect(Array.isArray(splitArray(zeroArray)[0])).toEqual(true);
    expect(Array.isArray(splitArray(zeroArray)[1])).toEqual(true);

    expect(splitArray(oneArray).length).toEqual(2);
    expect(Array.isArray(splitArray(oneArray)[0])).toEqual(true);
    expect(Array.isArray(splitArray(oneArray)[1])).toEqual(true);

    expect(splitArray(fiveArray).length).toEqual(2);
    expect(Array.isArray(splitArray(fiveArray)[0])).toEqual(true);
    expect(Array.isArray(splitArray(fiveArray)[1])).toEqual(true);
  });

  it("works with zero elements", () => {
    const result = [[], []];
    expect(splitArray(zeroArray)).toEqual(result);
  });

  it("works with one elements", () => {
    const result = [[3], []];
    expect(splitArray(oneArray)).toEqual(result);
  });

  it("works with two elements", () => {
    const result = [[4], [3]];
    expect(splitArray(twoArray)).toEqual(result);
  });

  it("works with three elements", () => {
    const result = [oneArray, twoArray];
    expect(splitArray(threeArray)).toEqual(result);
  });

  it("works with four elements", () => {
    const result = [twoArray, twoArray];
    expect(splitArray(fourArray)).toEqual(result);
  });

  it("works with five elements", () => {
    const result = [twoArray, threeArray];
    expect(splitArray(fiveArray)).toEqual(result);
  });
});

describe.only("mergeArrays tests", () => {
  it("works with two empty arrays", () => {
    expect(mergeArrays([], [])).toEqual([]);
  });

  it("works with right side empty", () => {
    expect(mergeArrays([3], [])).toEqual([3]);
  });

  it("works with left side empty", () => {
    expect(mergeArrays([], [3])).toEqual([3]);
  });

  it("works with left one, right one", () => {
    expect(mergeArrays([4], [3])).toEqual([3, 4]);
  });

  it("works with left two, right one", () => {
    expect(mergeArrays([2, 4], [3])).toEqual([2, 3, 4]);
  });

  it("works with left one, right two", () => {
    expect(mergeArrays([4], [3, 5])).toEqual([3, 4, 5]);
  });

  it("works with left two, right two", () => {
    expect(mergeArrays([4], [3, 5])).toEqual([3, 4, 5]);
  });

  it("works with left two, right three", () => {
    expect(mergeArrays([1, 4], [1, 3, 5])).toEqual([1, 1, 3, 4, 5]);
  });

  it("works with left three, right two", () => {
    expect(mergeArrays([2, 4, 8], [3, 5])).toEqual([2, 3, 4, 5, 8]);
  });

  it("works with left three, right three", () => {
    expect(mergeArrays([2, 4, 8], [3, 5, 11])).toEqual([2, 3, 4, 5, 8, 11]);
  });
});
