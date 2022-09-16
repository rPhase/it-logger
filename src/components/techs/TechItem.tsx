import React from 'react';
import { deleteTech } from '../../actions/techActions';
import { useDispatch } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min.js';
import { AppDispatch } from '../../store';
import { ITech } from './techSlice';

interface Props {
  tech: ITech;
}

const TechItem = ({ tech }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

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

export default TechItem;
