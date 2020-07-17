import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ setSearchState, initialValue }) => {

  const input = useRef('hello');

  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = input.current.value;
    setSearchState(searchText);
  }

  useEffect(() => {
    input.current.value = initialValue;
  });

  return (
    <div style={styles.searchMain}>
      <form onSubmit={handleSearch}>
        <span style={styles.searchBox}>
          <input type="text" ref={input} placeholder="Search..." />
          <button type="submit" className="icon-inside search-btn">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </button>
        </span>
      </form>
    </div>
  );
}

const styles = {
  searchMain: {
    textAlign: 'center'
  },
  searchBox: {
    position: 'relative'
  },
  iconButton: {
    position: 'absolute'
  }
};

export default Search;
