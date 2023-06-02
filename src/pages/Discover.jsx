import { useDispatch, useSelector } from "react-redux"; // redux hooks

import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';

import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore"; // query


const Discover = () => {
    // console.log(genres);
    
    // this logic will dictate the current song to play
    /*
    Dispatch -> dispatches an action to store -> genre
    selector -> state
    */

    const dispatch = useDispatch();
    // useSelector to get the current song
    // player in state.player is found in playerSlice
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

    // const { data, isFetching, error } = useGetTopChartsQuery();
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
    
    console.log(data); // result of the API call

    // create a couple of loading states to check the status of the API call ( redux toolkit)
    if (isFetching) return <Loader title="Loading songs..." />; // to display that data is being fetched
    if (error) return <Error /> && window.location.reload(); // if there is an error

    // the logic behind calling out the genre from the array in genres based on user selection
    const genreTitle = genres.find(({ value }) => value === genreListId)?.title; 
     

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select
                    onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || 'pop'}
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5"
                >
                {/* This portion maps out genres in the list into the option element which is the select element */}
                    {genres.map((genre) => 
                        <option 
                        key={genre.value} 
                        value={genre.value}>{genre.title}
                        </option>
                    )}
                </select>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {/* This is done to show the hardcoded x10 songcard displaying on the page
                [1,2,3,4,5,6,7,8,9,10].map((song,i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))*/}
                {data.tracks?.map((song,i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Discover;
