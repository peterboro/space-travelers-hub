import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../MyProfile';
import store from '../../../redux/configureStore';

describe('MyProfile component', () => {
  test('renders on the screen', () => {
    expect(render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    ).getByTestId('myprofile')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
