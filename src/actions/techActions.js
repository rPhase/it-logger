import {
  techGet,
  techAdd,
  techDelete,
  techError,
  techLoading,
} from '../components/techs/techSlice';

// Get techs from server
export const getTechs = () => {
  return async (dispatch) => {
    try {
      dispatch(techLoading());
      const res = await fetch('/techs');
      const data = await res.json();
      dispatch(techGet(data));
    } catch (error) {
      dispatch(techError(error.response.statusText));
    }
  };
};

// Add new tech
export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      dispatch(techLoading());
      const res = await fetch('/techs', {
        method: 'POST',
        body: JSON.stringify(tech),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch(techAdd(data));
    } catch (error) {
      dispatch(techError(error.response.statusText));
    }
  };
};

// Delete tech from server
export const deleteTech = (id) => {
  return async (dispatch) => {
    try {
      // dispatch(techLoading());
      await fetch(`/techs/${id}`, {
        method: 'DELETE',
      });

      dispatch(techDelete(id));
    } catch (error) {
      dispatch(techError(error.response.statusText));
    }
  };
};
