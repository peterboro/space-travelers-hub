import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Header component', () => {
  test('renders on the screen', () => {
    expect(render(
      <Router>
        <Header />
      </Router>,
    ).getByTestId('header')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
