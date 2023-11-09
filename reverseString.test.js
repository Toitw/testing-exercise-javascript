const reverseString = require('./reverseString');

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a single-letter string', () => {
  expect(reverseString('h')).toBe('h');
});

test('leaves an empty string unchanged', () => {
  expect(reverseString('')).toBe('');
});