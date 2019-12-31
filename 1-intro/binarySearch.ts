/**
 * time complexity O(log n)
 * @param array {number[]}
 * @param target {number}
 */
export function binarySearch(array: number[], target: number) {
  let start = 0;
  let end = array.length - 1;
  let guess;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    guess = array[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
      end = mid - 1;
    } else if (guess < target) {
      start = mid + 1;
    }
  }

  return null;
}
