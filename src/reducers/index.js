import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'more and more',
            duration: '4:01'
        },
        {
            title: 'I want it that way',
            duration: '1:45'
        },
        {
            title: 'All star',
            duration: '2:39'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})