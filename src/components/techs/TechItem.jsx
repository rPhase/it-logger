import React from 'react';
import { deleteTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    const techName = `${tech.firstName} ${tech.lastName}`;
    dispatch(deleteTech(tech.id));
    M.toast({ html: `${techName} Deleted.` });
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
