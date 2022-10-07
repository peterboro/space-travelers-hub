import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import RocketsView from '../RocketsView';

let getByTestId;
let getByRole;

beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <RocketsView />
    </Provider>,
  );

  getByTestId = component.getByTestId;
  getByRole = component.getByRole;
});

describe('RocketsView component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('rockets-container')).toBeInTheDocument();
  });

  test('displays a loading spinner while fetching the data from the API', () => {
    expect(getByRole('img').src.split('/').reverse()[0]).toBe('spinner.gif');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketsView />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
