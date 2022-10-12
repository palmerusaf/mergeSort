export const mergeSort = (array) => {};

export const splitArray = (array) => {
  if (array.length < 2) return [array, []];
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  return [leftArray, rightArray];
};

export const mergeArrays = (left, right) => {
  const result = [];
  const merge = (array) => result.push(array.shift());

  while (left.length && right.length) {
    left[0] < right[0] ? merge(left) : merge(right);
  }

  while (left.length) merge(left);
  while (right.length) merge(right);

  return result;
};
