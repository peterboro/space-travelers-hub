import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissions } from '../../redux/missions/missions';
import MissionsView from '../MissionsView/MissionsView';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) { dispatch(getMissions()); }
  }, []);

  return (
    <>
      <br />
      <div className="headContainer">
        <div className="table-responsive">
          <Table striped>
            <thead>
              <tr>
                <th scope="col">Mission</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Join</th>
              </tr>
            </thead>
            <tbody>
              {
                missions.map((mission) => (
                  <MissionsView
                    key={mission.mission_id}
                    id={mission.mission_id}
                    name={mission.mission_name}
                    description={mission.description}
                    status={mission.reserved}
                  />
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Mission;
