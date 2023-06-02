/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef } from 'react';

const Player = ({ activeSong, isPlaying, onTimeUpdate, onLoadedData }) => {

  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  // 
  if (ref.current) { // creating a current attribute to associate to ref
    if (isPlaying) { // by default is false 
      ref.current.play(); // plays the audio
    } else {
      ref.current.pause(); // pauses the audio
    }
  }

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
