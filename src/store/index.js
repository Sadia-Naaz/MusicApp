import { legacy_createStore as createStore } from "redux";
import { movies, songs } from "../data/movies";
import { ActionTypes } from "./actions";

const intialState = {
    movies,
    songs,
    likedSongs: [], 
    activeSong: null // { state: true, id: }
}
console.log(intialState.songs);
const reducer = (state = intialState, action) => {
    if (action.type === ActionTypes.TOGGLE_PLAY_PAUSE) {
        if (!state.activeSong) {
            return { ...state, activeSong: { state: true, id: action.payload } };
        }
        else {
            if (state.activeSong.id === action.payload) {
                return { ...state, activeSong: { state: !state.activeSong.state, id: action.payload } }
            }
            else return { ...state, activeSong: { state: true, id: action.payload } }
        }
    }

    if (action.type === ActionTypes.TOGGLE_LIKE_UNLIKE) {
        // const songId = action.payload;
        const songTitle = action.payload;
        // const isPresent = state.likedSongs.indexOf(songId);
        const isPresent = state.likedSongs.indexOf(songTitle);

        

        if (isPresent === -1) {
            return { ...state, likedSongs: [...state.likedSongs, songTitle] };
        }
        // else return { ...state, likedSongs: state.likedSongs.filter(id => id !== songId) }
        else return { ...state, likedSongs: state.likedSongs.filter(title => title !== songTitle) }
    }

    return state;
}

const store = createStore(reducer);

export default store;