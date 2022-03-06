import { expect, test } from '@jest/globals';
import toPascalCase from './toPascalCase';

test('should return the value in pascal case', () => {
  expect(toPascalCase('hello world')).toBe('HelloWorld');
});
test('if the value is not in lowercase then should return the original value', () => {
  expect(toPascalCase('Hello world')).toBe('Hello world');
});
