import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Rocket from '../Rocket';

let getAllByRole;

const rockets = [
  {
    id: 1,
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    flickrImages: 'https://imgur.com/DaCfMsj.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
    reserved: false,
  },
  {
    id: 2,
    name: 'Falcon 9',
    description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    flickrImages: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9',
    reserved: true,
  },
];

beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <Rocket
        key={rockets[0].id}
        id={rockets[0].id}
        name={rockets[0].name}
        description={rockets[0].description}
        flickrImages={rockets[0].flickrImages}
        wikipedia={rockets[0].wikipedia}
        reserved={rockets[0].reserved}
      />
      <Rocket
        key={rockets[1].id}
        id={rockets[1].id}
        name={rockets[1].name}
        description={rockets[1].description}
        flickrImages={rockets[1].flickrImages}
        wikipedia={rockets[1].wikipedia}
        reserved={rockets[1].reserved}
      />
    </Provider>,
  );

  getAllByRole = component.getAllByRole;
});

describe('Rocket component', () => {
  test('is rendered two times on the screen', () => {
    expect(getAllByRole('article')).toHaveLength(2);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket
          key={rockets[0].id}
          id={rockets[0].id}
          name={rockets[0].name}
          description={rockets[0].description}
          flickrImages={rockets[0].flickrImages}
          wikipedia={rockets[0].wikipedia}
          reserved={rockets[0].reserved}
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
