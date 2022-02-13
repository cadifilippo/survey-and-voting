import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

describe('Main', () => {
  test('render correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
