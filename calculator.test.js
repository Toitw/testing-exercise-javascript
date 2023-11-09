const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});