import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// fetchBaseQuery is a function from redux for react that helps fetch data from the base URL.
// fetchBaseQuery works together with createApi in order to provide the endpoint data to the server.

// shazam API by NextBase
// const options = {
//     method: 'GET',
//     headers: {'X-RapidAPI-Key': '92068a4589msh42546d7bd371a8dp1caa67jsn77747c2dac3b'}
//   };
  
//   fetch('https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    // reducerPath is a function that handles a specific action type relative to 'shazamCoreApi' to safely mutate the state.
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api7.p.rapidapi.com',
        // prepareHeaders is to replace the need to keep rewriting options.
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '92068a4589msh42546d7bd371a8dp1caa67jsn77747c2dac3b');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` })

        // query is a function that returns the props to be passed to the endpoint.
    }),

});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;