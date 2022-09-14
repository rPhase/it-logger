import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const [search, setSearch] = useState('');
  const didMount = useRef(false);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  // Add a delay to search while user is typing
  useEffect(() => {
    let timerID;

    // Prevent first render
    if (!didMount.current) {
      didMount.current = true;
    } else {
      timerID = setTimeout(() => {
        searchLogs(search);
      }, 500);
    }

    return () => {
      clearTimeout(timerID);
    };
  }, [search, searchLogs]);

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

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);