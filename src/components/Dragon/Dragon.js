import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './Dragon.module.scss';
import { bookDragon, unbookDragon } from '../../redux/dragons/dragons';

const Dragon = (props) => {
  const {
    id, name, type, img, reserved,
  } = props;
  const dispatch = useDispatch();
  return (
    <div key={id} className={style['dragon-container']}>
      <img className={style['dragon-image']} src={img} alt="Dragon" />
      <div className={style['name-type-container']}>
        { reserved ? (<button type="button" className={style['reserved-tag']}>Reserved</button>) : ''}
        <p className={style.name}>{name}</p>
        <p className={style.type}>{type}</p>
        {
          reserved
            ? (<button type="button" onClick={() => dispatch(unbookDragon(id))} className={style['btn-unreserve']}>Cancel Reservation</button>)
            : (<button type="button" onClick={() => dispatch(bookDragon(id))} className={style['btn-reserve']}>Reserve</button>)

        }

      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragon;
