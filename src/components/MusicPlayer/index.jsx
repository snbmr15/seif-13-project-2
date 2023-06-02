import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playPause } from '../../redux/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Track from './Track';


const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [appTime, setAppTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);


  // console.log(appTime) // first play time will not have any effect, unless played again.
  const handlePlayPause = () => {
    /*
    If song not active -> return nothing
    if song is playing -> playPause 
    */
    if (!isActive) return;

    if (isPlaying) { // by default, false
      dispatch(playPause(false)); // play logo stays on, no song playing
    } else {
      dispatch(playPause(true)); // pause logo stays on, song is playing
    }
  };


  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">

      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />

      <div className="flex-1 flex flex-col items-center justify-center">

        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          handlePlayPause={handlePlayPause}
        />


        <Player
          activeSong={activeSong}
          isPlaying={isPlaying}
          currentIndex={currentIndex}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />

      </div>
    </div>
  );
};

export default MusicPlayer;
