import React, { useEffect } from 'react';
import { getTechs } from '../../actions/techActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

const TechSelectOptions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { techs, loading } = useSelector((state: RootState) => state.tech);

  useEffect(() => {
    dispatch(getTechs());
  }, [dispatch]);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

export default TechSelectOptions;
