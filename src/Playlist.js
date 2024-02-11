// Playlist.js

import React from 'react';
import TrackList from './TrackList';
import './Playlist.css';

const Playlist = ({ playlistName, setPlaylistName, playlistTracks, onRemove, onSave }) => {
  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
