import React, { useEffect } from 'react';
import { getTechs } from '../../actions/techActions';
import { useDispatch, useSelector } from 'react-redux';

const TechSelectOptions = () => {
  const dispatch = useDispatch();
  const techs = useSelector((state) => state.tech.techs);
  const loading = useSelector((state) => state.tech.loading);

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
