import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import FullPageSpinner from './FullPageSpinner';

describe('FullPageSpinner', () => {
  test('render correctly', () => {
    const tree = render(
      <FullPageSpinner>
        <h1>I&apos;m a FullPageSpinner</h1>
      </FullPageSpinner>
    );
    expect(tree).toMatchSnapshot();
  });
});
