import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsThunk } from '../../redux/rockets/rockets';
import Rocket from '../Rocket/Rocket';
// import Spinner from '../Spinner/Spinner';
import style from './RocketsView.module.scss';

const RocketView = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsThunk());
  }, []);

  return (
    <section className={style['rockets-container']}>
      <ul className={style['rockets-list']}>
        { rockets.list.length ? rockets.list.map((rocket) => {
          const {
            id, name, description, flickrImages, reserved,
          } = rocket;

          return (
            <li key={id}>
              <Rocket
                id={id}
                name={name}
                description={description}
                flickrImages={flickrImages}
                reserved={reserved}
              />
            </li>
          );
        }) : <p>Loading data...</p> }
      </ul>
    </section>
  );
};

export default RocketView;
