import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import DragonsView from '../DragonsView';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <DragonsView />
    </Provider>,
  );

  getByTestId = component.getByTestId;
});

describe('DragonsView component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('dragons-container')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <DragonsView />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
