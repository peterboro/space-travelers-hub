import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unbookRocket } from '../../redux/rockets/rockets';
import style from './MyProfile.module.scss';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.list).filter((rocket) => rocket.reserved);
  const dispatch = useDispatch();

  return (
    <section className={style['profile-grid']}>
      <div className={style.category}>
        <h2>My Missions</h2>
        <ul>
          <li>Mission 1</li>
          <li>Mission 2</li>
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
                onClick={(e) => dispatch(unbookRocket(+e.target.closest('li').dataset.id))}
              >
                Cancel Reservation
              </button>
            </li>
          )) : <li>There is no booked rocket</li> }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
