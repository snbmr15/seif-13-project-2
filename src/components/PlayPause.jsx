import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => 
(isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle 
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
  ) : (
  <FaPlayCircle 
  size={35}
  className="text-gray-300"
  onClick={handlePlay}
  />
));

export default PlayPause;

// this whole logic is:
// 1. if song is playing and the active song title is the same as the song.title
// 2. the pause logo will be displayed,
// 3. otherwise the play logo will be displayed.