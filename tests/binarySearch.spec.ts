import * as search from '../1-intro/binarySearch';

describe('binary search', () => {
  it('returns right answer', () => {
    const ret = search.binarySearch([1,2,4,5,6,7,8], 4);
    expect(ret).toBe(2);
  })
})