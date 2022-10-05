import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import RocketsView from '../RocketsView';

let getByTestId;
let getAllByRole;
let getByRole;
const fetchingTimeout = 2000;

beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <RocketsView />
    </Provider>,
  );
  getByTestId = component.getByTestId;
  getAllByRole = component.getAllByRole;
  getByRole = component.getByRole;
});

describe('RocketsView component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('rockets-container')).toBeInTheDocument();
  });

  test('displays a loading spinner while fetching the data from the API', () => {
    expect(getByRole('img').src.split('/').reverse()[0]).toBe('spinner.gif');
  });

  test('contains exactly the 4 rockets returned by the API', () => {
    setTimeout(() => expect(getAllByRole('listitem')).toHaveLength(4), fetchingTimeout);
  });

  setTimeout(() => {
    test('booking a rocket changes the action button', () => {
      const secondBookingButton = getAllByRole('listitem')[1].getByRole('button');
      fireEvent.click(secondBookingButton);

      expect(getAllByRole('listitem')[1].getByRole('button')).toHaveTextContent('Cancel Reservation');
    });
  }, fetchingTimeout);

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketsView />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
