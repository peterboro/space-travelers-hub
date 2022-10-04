import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../Rocket/Rocket';
import style from './RocketsView.module.scss';

const RocketView = () => {
  const rockets = useSelector((state) => state.rockets);

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
                flickrImages={flickrImages[0]}
                reserved={reserved}
              />
            </li>
          );
        }) : (
          <div className={style.loader}>
            <img src={`${process.env.PUBLIC_URL}images/spinner.gif`} alt="Spinning loader" />
            <p>Data is currently loading. Please wait...</p>
          </div>
        ) }
      </ul>
    </section>
  );
};

export default RocketView;
