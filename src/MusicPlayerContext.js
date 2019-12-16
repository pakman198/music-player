import React, { useState } from 'react';

import Jazz from './audio/bensound-allthat.mp3';
import Dance from './audio/bensound-summer.mp3';
import Guitar from './audio/bensound-tomorrow.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    tracks: [
      {
        name: 'Lost Chameleon - Genesis',
        file: Jazz
      },
      {
        name: 'The Hipsta - Shaken Soda',
        file: Dance
      },
      {
        name: 'Tobu - Such Fun',
        file: Guitar
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
    audioPlayer: new Audio(),
  });

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
}

export { MusicPlayerContext, MusicPlayerProvider };