import {
  logGet,
  logAdd,
  logDelete,
  logUpdate,
  logSearch,
  logSetCurrent,
  logSetLoading,
  logError,
  logClearCurrent,
  ILog,
} from '../components/logs/logSlice';
import { AppDispatch } from '../store';

// Get logs from server
export const getLogs = () => {
  return async (dispatch:AppDispatch) => {
    try {
      dispatch(logSetLoading());
      const res = await fetch('/logs');
      const data = await res.json();
      dispatch(logGet(data));
    } catch (error:any) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Add new log
export const addLog = (log:ILog) => {
  return async (dispatch:AppDispatch) => {
    try {
      dispatch(logSetLoading());
      const res = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch(logAdd(data));
    } catch (error:any) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Delete log from server
export const deleteLog = (id:number) => {
  return async (dispatch:AppDispatch) => {
    try {
      // dispatch(logSetLoading());
      await fetch(`/logs/${id}`, {
        method: 'DELETE',
      });

      dispatch(logDelete(id));
    } catch (error:any) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Update log on server
export const updateLog = (log:ILog) => {
  return async (dispatch:AppDispatch) => {
    try {
      // dispatch(logSetLoading());
      const res = await fetch(`/logs/${log.id}`, {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      dispatch(logUpdate(data));
    } catch (error:any) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Search logs
export const searchLogs = (text:string) => {
  return async (dispatch:AppDispatch) => {
    try {
      dispatch(logSetLoading());
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();
      dispatch(logSearch(data));
    } catch (error:any) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Set current log for editing
export const setCurrent = (log:ILog) => {
  return (dispatch:AppDispatch) => {
    dispatch(logSetCurrent(log));
  };
};

// Clear current log
export const clearCurrent = () => {
  return (dispatch:AppDispatch) => {
    dispatch(logClearCurrent());
  };
};
