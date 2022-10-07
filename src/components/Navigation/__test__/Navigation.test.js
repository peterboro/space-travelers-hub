import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';

describe('Navigation component', () => {
  test('renders on the screen', () => {
    expect(render(
      <Router>
        <Navigation />
      </Router>,
    ).getByTestId('navbar')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Navigation />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
