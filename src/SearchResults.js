import React from 'react';
import TrackList from './TrackList';
import './SearchResults.css';

const SearchResults = ({ results, onAdd }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={results} onAdd={onAdd} isRemoval={false} />
    </div>
  );
};

export default SearchResults;
