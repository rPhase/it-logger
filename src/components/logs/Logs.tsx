import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { useSelector, useDispatch } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import { AppDispatch, RootState } from '../../store';

const Logs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { logs, loading } = useSelector((state: RootState) => state.log);

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
