import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('render correctly', () => {
    const tree = render(
      <Login>
        <h1>I&apos;m a Login</h1>
      </Login>
    );
    expect(tree).toMatchSnapshot();
  });
});
