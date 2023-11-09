const caesarCipher = require('./caesarCipher');

test('shifts characters by a given factor', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('wraps from z to a', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('keeps the same case', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
});

test('ignores non-letter characters', () => {
  expect(caesarCipher('abc123', 1)).toBe('bcd123');
});