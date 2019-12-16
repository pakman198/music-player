import React from 'react';

import TrackList from "./TrackList";
import PlayerControls from './PlayerControls';
import { MusicPlayerProvider } from "./MusicPlayerContext";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container" style={{ minHeight: 'calc(100vh - 70px)'}}>
        <TrackList />
        <PlayerControls />
      </div>
      <footer style={{ height: '50px', textAlign: 'center' }}> Music by <a href="https://www.bensound.com/">Bensound</a></footer>
    </MusicPlayerProvider>
  );
}

export default App;