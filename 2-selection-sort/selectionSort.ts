function findIndexOfSmallest(array: number[]): number {
  const l = array.length;
  let index = 0;
  let min = array[index];
  for (let i = 0; i < l; i++) {
    const curr = array[i];
    if (curr <= min) {
      min = curr;
      index = i;
    }
  }
  return index;
}

/**
 * time complexity O(n2)
 * @param arr {number[]}
 */
export function selectionSort(arr: number[]): number[] {
  const result = [];

  while (arr.length > 0) {
    const index = findIndexOfSmallest(arr);
    result.push(arr.splice(index, 1)[0]);
  }

  return result;
}
