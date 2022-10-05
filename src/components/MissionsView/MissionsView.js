import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionsView = ({
  id, name, description, status,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr key={id}>
        <th scope="row" className="text-dark">{name}</th>
        <td className="w-50 text-dark">{description}</td>
        <td>
          {
            status
              ? <span className="badge rounded-pill bg-success">Active Member</span>
              : <span className="badge rounded-pill bg-primary">Not a Member</span>
          }
        </td>
        <td>
          {
            status
              ? (
                <button
                  type="button"
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => dispatch(leaveMission(id))}
                >
                  Leave mission
                </button>
              )
              : (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => dispatch(joinMission(id))}
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
