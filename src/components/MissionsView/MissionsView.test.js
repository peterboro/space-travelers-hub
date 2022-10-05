import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import MissionsView from './MissionsView';

describe('Mission Component', () => {
  it('Does the mission render correctly?', () => {
    const mission = {
      mission_id: 'uuid',
      mission_name: 'Iridium NEXT',
      description: 'A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd',
      reserved: false,
    };
    const missTree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <MissionsView
            key={mission.mission_id}
            id={mission.mission_id}
            description={mission.description}
            name={mission.mission_name}
            status={mission.reserved}
          />
        </Provider>
      </React.StrictMode>,
    );

    expect(missTree).toMatchSnapshot();
  });
});
