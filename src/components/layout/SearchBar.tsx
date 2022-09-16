import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
import { AppDispatch } from '../../store';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const didMount = useRef(false);
  const dispatch = useDispatch<AppDispatch>();

  const onChangeHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  // Add a delay to search while user is typing
  useEffect(() => {
    let timerID: ReturnType<typeof setTimeout>;

    // Prevent first render
    if (!didMount.current) {
      didMount.current = true;
    } else {
      timerID = setTimeout(() => {
        dispatch(searchLogs(search));
      }, 500);
    }

    return () => {
      clearTimeout(timerID);
    };
  }, [search, dispatch]);

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs...'
              onChange={onChangeHandler}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
