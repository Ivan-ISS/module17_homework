import { repeatWord } from '../index.js';

describe('repeatWord', () => {
  it('the number is positive', () => {
    expect(repeatWord('word', 3)).toBe('word1, word2, word3');
    expect(repeatWord('word', 8)).toBe('word1, word2, word3, word4, word5, word6, word7, word8');
    expect(repeatWord('word', 5)).toBe('word1, word2, word3, word4, word5');
  });
  it('the number is negative', () => {
    expect(repeatWord('word', -8)).toBe('error: negative number entered');
  });
  it('the number is zero', () => {
    expect(repeatWord('word', 0)).toBe('');
  });
  it('data is not a number', () => {
    expect(repeatWord('word', 'string')).toBe('error: not a numeric value');
  });
});
