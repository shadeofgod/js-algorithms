import { factorial } from '../3-recursion/factorial';

describe('factorial', () => {
  it('returns right result for factorial function', () => {
    expect(factorial(4)).toBe(24);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
  });
});
