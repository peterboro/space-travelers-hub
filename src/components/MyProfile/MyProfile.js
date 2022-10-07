import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unbookRocket } from '../../redux/rockets/rockets';
import { unbookDragon } from '../../redux/dragons/dragons';
import { leaveMission } from '../../redux/missions/missions';
import style from './MyProfile.module.scss';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.list).filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions.list);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const dragons = useSelector((state) => state.dragons.list).filter((dragon) => dragon.reserved);
  const dispatch = useDispatch();

  return (
    <section className={style.profile} data-testid="myprofile">
      <div className={style.category}>
        <h2>My Missions</h2>
        <ul>
          { reservedMissions.length ? reservedMissions.map((mission) => (
            <li key={mission.id}>
              <span>{mission.name}</span>
              <button
                type="button"
                className={style['btn-unreserve']}
                onClick={() => dispatch(leaveMission(mission.id))}
              >
                Cancel Reservation
              </button>
              <a href={mission.wikipedia} className={style['btn-more']}>More</a>
            </li>
          )) : <li>There is no booked mission</li> }
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
          {dragons.length ? dragons.map((dragon) => (
            <li key={dragon.id} id={dragon.id}>
              <span>{ dragon.name }</span>
              <button
                type="button"
                className={style['btn-unreserve']}
                onClick={() => dispatch(unbookDragon(dragon.id))}
              >
                Cancel Reservation
              </button>
              <a href={dragon.wikipedia} className={style['btn-more']}>More</a>
            </li>
          )) : <li>There is no booked dragon</li> }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
