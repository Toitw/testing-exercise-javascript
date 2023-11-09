const capitalize = require('./capitalize');

test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('leaves strings with a capitalized first letter unchanged', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('capitalizes single-letter strings', () => {
  expect(capitalize('h')).toBe('H');
});

test('leaves empty string unchanged', () => {
  expect(capitalize('')).toBe('');
});