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
} from '../components/logs/logSlice';

// Get logs from server
export const getLogs = () => {
  return async (dispatch) => {
    try {
      dispatch(logSetLoading());
      const res = await fetch('/logs');
      const data = await res.json();
      dispatch(logGet(data));
    } catch (error) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Add new log
export const addLog = (log) => {
  return async (dispatch) => {
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
    } catch (error) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Delete log from server
export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      // dispatch(logSetLoading());
      await fetch(`/logs/${id}`, {
        method: 'DELETE',
      });

      dispatch(logDelete(id));
    } catch (error) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Update log on server
export const updateLog = (log) => {
  return async (dispatch) => {
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
    } catch (error) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Search logs
export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      dispatch(logSetLoading());
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();
      dispatch(logSearch(data));
    } catch (error) {
      dispatch(logError(error.response.statusText));
    }
  };
};

// Set current log for editing
export const setCurrent = (log) => {
  return (dispatch) => {
    dispatch(logSetCurrent(log));
  };
};

// Clear current log
export const clearCurrent = () => {
  return (dispatch) => {
    dispatch(logClearCurrent());
  };
};
