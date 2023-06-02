import { useDispatch } from 'react-redux'; //redux hook that triggers a state change

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import { HiHeart } from 'react-icons/hi';

const SongCard = ({ song, isPlaying, activeSong, i, data, favouriteSong }) => {

  // const activeSong = 'Test';
/*
  Dispatch ( add choco powder )
  Dispatch ( add choco dressing )
   \\\ dispatch allows things to be changed to the state ////

  Cake -> selectors (slices)

*/
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));  
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song,data,i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[240px] p-2 bg-white/5 bg-opacity-80 text-2x backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        {<img src={song.images ? "https://img.favpng.com/21/13/23/phonograph-record-record-sleeve-compact-disc-album-cover-png-favpng-PGw7JJz8shxbriGVbB6g2ZE8q.jpg" : song.images?.coverart} alt="song image" />}
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
            {song.title || song.heading?.title}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
            {song.subtitle || song.heading?.subtitle}
        </p>
      </div>

      {favouriteSong && <div className="font-semibold text-pink-200 active:text-red-600">
        <button onClick={() => favouriteSong(song)}>
          <HiHeart />
        </button>
      </div>}
    </div>
  );
}

export default SongCard;
