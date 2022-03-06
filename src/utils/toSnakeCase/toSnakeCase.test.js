import { expect, test } from '@jest/globals';
import toSnakeCase from './toSnakeCase';

test('should return the value in snake case', () => {
  expect(toSnakeCase('hello world')).toBe('hello_world');
});
