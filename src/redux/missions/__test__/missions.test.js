/* eslint-disable camelcase */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import GET_MISSIONS, { getMissions } from '../missions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

beforeEach(() => {
  store = mockStore({ mission: [] });
});

afterEach(() => {
  nock.cleanAll();
});

describe('fetching mission', () => {
  test('dispatches FETCH_MISSION_SUCCESS when fetching succeeds', () => {
    const mission_name = 'Thaicom';
    const missionObj = { mission_name };

    nock('http://localhost:3000/')
      .get(`/https://api.spacexdata.com/v3/missions/${mission_name}`)
      .reply(200, missionObj);

    const expectedActions = [
      { type: GET_MISSIONS.FETCH_MISSION_REQUEST },
      { type: GET_MISSIONS.FETCH_MISSION_SUCCESS, result: missionObj },
    ];

    expect.assertions(0);

    return store.dispatch(getMissions(mission_name))
      .catch(() => expect(store.getActions().mission_name).toEqual(expectedActions));
  });

  test('dispatches FETCH_MISSION_FAILURE when fetching fails', () => {
    const mission_name = 'Non Existent';
    const errorMsg = 'mission not found';

    nock('http://localhost:3000/')
      .get(`/https://api.spacexdata.com/v3/missions/${mission_name}`)
      .reply(404, { error: errorMsg });

    const expectedActions = [
      { type: GET_MISSIONS.FETCH_MISSION_REQUEST },
      { type: GET_MISSIONS.FETCH_MISSION_FAILURE, error: new Error(errorMsg) },
    ];

    expect.assertions(0);

    return store.dispatch(getMissions(mission_name))
      .catch(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
