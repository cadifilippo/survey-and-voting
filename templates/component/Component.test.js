import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  test('render correctly', () => {
    const tree = render(
      <Component>
        <h1>I&apos;m a Component</h1>
      </Component>
    );
    expect(tree).toMatchSnapshot();
  });
});
