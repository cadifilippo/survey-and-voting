import { expect, test } from '@jest/globals';
import toCapitalize from './toCapitalize';

test('should return the value capitalized', () => {
  expect(toCapitalize('hello')).toBe('Hello');
});
