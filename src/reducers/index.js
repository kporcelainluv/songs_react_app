import {combineReducers, } from "redux";

const songsReducer = ()=>{
  return ([
    {title: 'No scrubs', duration: '3.40'},
    {title: 'Las Ketchup', duration: '2.50'},
    {title: 'Ishome', duration: '3.15'},
    {title: 'Eternity', duration: '4.20'},
  ])
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

