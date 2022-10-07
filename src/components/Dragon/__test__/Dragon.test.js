import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Dragon from '../Dragon';

let getAllByRole;

const dragons = [
  {
    id: 'dragon1',
    name: 'Dragon 1',
    type: 'capsule',
    img: 'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
    reserved: false,
  },
];

beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <Dragon
        key={dragons[0].id}
        id={dragons[0].id}
        name={dragons[0].name}
        type={dragons[0].type}
        img={dragons[0].img}
        reserved={dragons[0].reserved}
      />
    </Provider>,
  );

  getAllByRole = component.getAllByRole;
});

describe('Dragon component', () => {
  test('is rendered one time on the screen', () => {
    expect(getAllByRole('article')).toHaveLength(1);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Dragon
          key={dragons[0].id}
          id={dragons[0].id}
          name={dragons[0].name}
          type={dragons[0].type}
          img={dragons[0].img}
          reserved={dragons[0].reserved}
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
