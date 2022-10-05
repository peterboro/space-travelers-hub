import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unbookRocket } from '../../redux/rockets/rockets';
import style from './MyProfile.module.scss';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.list).filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const dispatch = useDispatch();

  return (
    <section className={style.profile}>
      <div className={style.category}>
        <h2>My Missions</h2>
        <ul>
          { reservedMissions.map((mission) => (
            <li key={mission.mission_id}>
              <span>{mission.mission_name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.category}>
        <h2>My Rockets</h2>
        <ul>
          { rockets.length ? rockets.map((rocket) => (
            <li key={rocket.id} data-id={rocket.id}>
              <span>{rocket.name}</span>
              <button
                type="button"
                className={style['btn-unreserve']}
                onClick={(e) => dispatch(unbookRocket(+e.target.closest('li').dataset.id))}
              >
                Cancel Reservation
              </button>
              <a href={rocket.wikipedia} className={style['btn-more']}>More</a>
            </li>
          )) : <li>There is no booked rocket</li> }
        </ul>
      </div>
      <div className={style.category}>
        <h2>My Dragons</h2>
        <ul>
          <li>Dragon 1</li>
          <li>Dragon 2</li>
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
