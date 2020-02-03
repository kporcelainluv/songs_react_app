import {combineReducers, } from "redux";

const SongsReducer = ()=>{
  return ([
    {title: 'No scrubs', duration: '3.40'},
    {title: 'Las Ketchup', duration: '2.50'},
    {title: 'Ishome', duration: '3.15'},
    {title: 'Eternity', duration: '4.20'},
  ])
}

const SelectedSongReducer = (selectedSong = null, action)=>{
  if (action.type === 'SONG_SELECTED'){
    return action.payload
  }
  return selectedSong

};


export default combineReducers({
  song: SongsReducer,
  selectedSong: SelectedSongReducer
});
