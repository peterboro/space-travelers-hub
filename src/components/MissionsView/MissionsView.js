import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionsView = ({
  id, name, description, status,
}) => {
  const dispatch = useDispatch();

  const badge = status
    ? { style: 'badge rounded-pill bg-success', text: 'Active Member' }
    : { style: 'badge rounded-pill bg-primary', text: 'Not A Member' };

  return (
    <>
      <tr key={id}>
        <th scope="row" className="text-dark">{name}</th>
        <td className="w-50 text-dark">{description}</td>
        <td>
          <Badge bg={badge.style}>{badge.text}</Badge>
        </td>
        <td>
          {
            status
              ? (
                <button
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => dispatch(leaveMission(id))}
                  type="button"
                >
                  Leave Mission
                </button>
              )
              : (
                <button
                  className="btn btn-outline-primary btn-sm"
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
