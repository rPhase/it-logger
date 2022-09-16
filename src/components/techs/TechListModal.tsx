import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

const TechListModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { techs, loading } = useSelector((state: RootState) => state.tech);

  useEffect(() => {
    dispatch(getTechs());
  }, [dispatch]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
