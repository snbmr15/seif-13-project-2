import React from 'react';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SongCard } from '../components';

const Liked = ({ likedSongs }) => {

    console.log(likedSongs);
    // const [favourite, setFavourite] = useState([]);
    const { activeSong, isPlaying } = useSelector((state) => state.player);


    return (
        <div className='text-white'>
            <div className='font-semibold'>
                Here are your favourites!
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {likedSongs.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={likedSongs}
                        i={i}
                    />
                ))}
            </div>

        </div>
    );
};

export default Liked;
