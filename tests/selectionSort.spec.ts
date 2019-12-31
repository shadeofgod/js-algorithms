import { selectionSort } from '../2-selection-sort/selectionSort';

describe('selection sort', () => {
  it('returns right answer for selection sort', () => {
    expect(selectionSort([4, 3, 1, 2, 5, 8])).toEqual([1, 2, 3, 4, 5, 8]);
    expect(selectionSort([-1, -2, 0, 6, 2, 5])).toEqual([-2, -1, 0, 2, 5, 6]);
  });
});
