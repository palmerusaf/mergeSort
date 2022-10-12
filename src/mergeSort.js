export const splitArray = (array) => {
  if (array.length < 2) return [array, []];
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return [left, right];
};

export const mergeArrays = (left, right) => {
  const result = [];
  const merge = (array) => result.push(array.shift());

  while (left.length && right.length)
    left[0] < right[0] ? merge(left) : merge(right);

  while (left.length) merge(left);
  while (right.length) merge(right);

  return result;
};

export const mergeSort = (array) => {
  if (array.length < 2) return array;

  const [left, right] = splitArray(array);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeArrays(sortedLeft, sortedRight);
};
