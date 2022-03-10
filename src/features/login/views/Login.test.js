import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('[LOGIN] [VIEWS] Login', () => {
  test('render correctly', () => {
    const tree = render(<Login />);
    expect(tree).toMatchSnapshot();
  });

  test('should have a github button', () => {
    render(<Login />);
    expect(screen.getByTestId('github')).toBeInTheDocument();
  });
});
