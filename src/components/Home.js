import React, { useState } from 'react';

import '../css/home.scss';

import Search from './Search';
import PhotosGrid from './PhotosGrid';

const Home = () => {

  const [searchState, setSearchState] = useState('Mountain');
  const searchTag = searchState.toLowerCase();
  const initialSearchValue = '';

  const changeSearchState = (searchTxt) => {
    setSearchState(searchTxt);
  }

  return (
    <div className="home-main">
      <div className="home-container">
        <div className="search-input-main">
          <Search setSearchState={changeSearchState} initialValue={initialSearchValue} />
        </div>
        <div className="search-tags-main media-friendly-flex">
          {
            searchTags.map((tag, index) => (
              <button type="button"
                key={index}
                onClick={() => changeSearchState(tag)}
                className={`btn btn-white search-tags-btn ${tag.toLowerCase() === searchTag ? 'active' : ''}`}
              >
                {tag}
              </button>
            ))
          }
        </div>
        <PhotosGrid imageTag={searchTag} />
      </div>
    </div>
  );
};

const searchTags = ['Mountain', 'Beach', 'Bird', 'Food'];

export default Home;
