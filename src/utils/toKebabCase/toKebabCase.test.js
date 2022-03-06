import { expect, test } from '@jest/globals';
import toKebabCase from './toKebabCase';

test('should return the value in kebab case', () => {
  expect(toKebabCase('hello world')).toBe('hello-world');
});
