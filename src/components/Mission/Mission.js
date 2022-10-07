import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Mission.module.scss';
import { fetchMissionsThunk } from '../../redux/missions/missions';
import MissionsView from '../MissionsView/MissionsView';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.list);
  useEffect(() => {
    if (missions.length === 0) { dispatch(fetchMissionsThunk()); }
  }, []);

  return (
    <section className={style['missions-container']} data-testid="missions">
      { missions && (
        <table>
          <thead>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </thead>
          <tbody>
            {
              missions.map((mission) => (
                <MissionsView
                  key={mission.id}
                  id={mission.id}
                  name={mission.name}
                  description={mission.description}
                  status={mission.reserved}
                />
              ))
            }
          </tbody>
        </table>
      ) }
    </section>
  );
};

export default Mission;
