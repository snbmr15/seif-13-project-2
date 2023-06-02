Tunestory-shazam

A simple working in progress music player with limited features.

Description:
A simple music player with song/artist library using Shazam Core API.

Technical Used:
- React
- Vite.js
- Tailwind.css
- Rapid API extension [ Shazam Core API by WaveTech ] 
- react-icons
- redux toolkit

Wireframes
1. Discover Page before
2. Discover Page after user clicks on song (Music Player Console appears)
3. Search Page
4. Liked Page
5. Top Charts Page


User Stories:
[Discover Page Features]
- switch between genres ( and see displayed songs)
- Music Player console pops up when user presses play 
- play/stop/forward/backtrack/repeat/shuffle/adjust sound level features

[Search Page Features]
- search artist/songs
- option to favourite the displayed results

[Liked Songs Page Features]
- view user's favourited songs from "Search Page"

[Top Charts Page Features]
- user has no interaction but is able to see the fetched data for this query

[Top Charts Floating Page]
- user has no interaction but is able to see the fetched data for this query
- hover over song effect but has no interactions for the user ( just to show some form of exploration done by user )
- user can click on 'See More' to redirect them to "Top Charts Page"


Planning & Development Process:

Initial Idea:
Initially was supposed to be a music player & library console that allows user to search songs, favorite songs and add an image to the song to showcase a form of scrapbook journalling, something sentimental and personal for the user.

Challenges Faced:
- Was using Spotify API but wasn't clear on specifically sorting out the required data to fetch from the Spotify API base.
- Could not extract song search which was the fundamentals for this application using Spotify API.

What was improved/changed:
From initial idea,
- swapped to Shazam Core API
- made it less complicated with only 4 Pages(Search, Discover [with Music Player], Favourites, Top Charts) compared to (Search, Playlists[with Music Player], Image added to Song[within Playlist], view added Images as a compilation)


Final Idea:
A simple Music Player in "Discover Page" and a song library with users being able to favourite their songs upon search and view them in the "Liked Songs Page".

Challenges Faced:
- took some time to extract the correct details using Shazam Core API 
- eliminating the playable song features in Search, Liked Songs & Top Charts Pages. (Would prefer it to be done neatly as stretch goals)

Unsolved Problems:
- eliminating the playable song features in Search, Liked Songs & Top Charts Pages. (Would prefer it to be done neatly as stretch goals)
- eliminating the "all song is playing" (with pause logo) when user clicks on one song to play
- when navigated into Search, Liked, Top Charts pages, when user presses play, it will be playing from the last song played in Discover Page.

Possible Further Improvements:
- every page, songs are playable
- addition of image to associated song in Liked Page (Personality for the user)

Acknowledgements:
Rapid API extension
rapidapi.com
JS Mastery Pro Youtube



Live Site ---- vercel app -------

Repository Source Code is available on GitHub:
--------------github.io---------------


Authors
SITI NURSYAZIELAWATI 
https://github.com/snbmr15

