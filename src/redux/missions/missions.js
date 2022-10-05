const GET_MISSIONS = 'spacetravelers/missions/missions';
const JOIN_MISSION = 'spacetravelers/missions/joinMission';
const LEAVE_MISSION = 'spacetravelers/missions/leaveMission';
const initialState = [];

const missions = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];
    case JOIN_MISSION:
      return [
        ...state.map((mission) => (mission.mission_id !== action.payload
          ? mission : { ...mission, reserved: true }))];
    case LEAVE_MISSION:
      return [
        ...state.map((mission) => (mission.mission_id !== action.payload
          ? mission : { ...mission, reserved: false })),
      ];
    default:
      return state;
  }
};

export const getMission = (id) => ({
  type: GET_MISSIONS,
  payload: id,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export default missions;

const url = 'https://api.spacexdata.com/v3';

export const getMissions = () => async (dispatch) => {
  const response = await fetch(`${url}/missions`);
  const missions = await response.json();
  const formatMissions = missions.map((e) => {
    const obj = {
      mission_id: e.mission_id,
      mission_name: e.mission_name,
      description: e.description,
      wikipedia: e.wikipedia,
      reserved: false,
    };
    return obj;
  });
  dispatch(getMission(formatMissions));
};
