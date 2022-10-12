export const splitArray = (array) => {
  if (array.length < 2) return [array, []];
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  return [leftArray, rightArray];
};

