import { combineReducers } from "redux";


const songsReducer = () => {
    return [
        {
            title: "Sunflower",
            length: "3:23"
        },
        {
            title: "Aura",
            length: "2:52"
        },
       {
            title: "Heat Waves",
            length: "3:02"
        },
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})