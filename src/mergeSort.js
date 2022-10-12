export const mergeSort = (array) => {};

export const splitArray = (array) => {
  if (array.length < 2) return [array, []];
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  return [leftArray, rightArray];
};

export const mergeArrays = (left, right) => {
  let i = 0;
  let j = 0;

  const result = [];
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result[k++] = left[i++];
    else result[k++] = right[j++];
  }

  for (; i < left.length; i++) result[k++] = left[i];
  for (; j < right.length; j++) result[k++] = right[j];

  return result;
};
