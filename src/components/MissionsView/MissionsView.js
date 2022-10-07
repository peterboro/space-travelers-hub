import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import style from './MissionsView.module.scss';

const MissionsView = ({
  id, name, description, status,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr key={id}>
        <td className={style.title}>{name}</td>
        <td className={style.description}>{description}</td>
        <td>
          <span className={`${style.badge} ${style[status ? 'member' : 'not-member']}`}>
            { status ? 'Active Member' : 'Not A Member' }
          </span>
        </td>
        <td>
          {
            status
              ? (
                <button
                  className={style['btn-leave']}
                  onClick={() => dispatch(leaveMission(id))}
                  type="button"
                >
                  Leave Mission
                </button>
              )
              : (
                <button
                  className={style['btn-join']}
                  onClick={() => dispatch(joinMission(id))}
                  type="button"
                >
                  Join Mission
                </button>
              )
          }
        </td>
      </tr>
    </>
  );
};

MissionsView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default MissionsView;
