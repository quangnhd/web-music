import { LOAD_FAILURE, LOAD_REQUEST, LOAD_SUCCESS, SET_SONG } from "./songActionTypes";

const init = {
    songs: null,
    currentSong: null,
    loading: false,
    error: null
}


export default function songReducer(state = init, { type, payload }) {
    switch (type) {
        case LOAD_REQUEST:
            return { ...init, loading: true }
        case LOAD_SUCCESS:
            return {
                ...init,
                songs: payload,
                currentSong: payload[0],
            }
        case LOAD_FAILURE:
            return { ...init, error: payload }
        case SET_SONG:
            if (!state.songs) return state
            let nextSong = state.songs.find(song => song.id === payload)
            if (!nextSong) nextSong = state.songs[0]
            return { ...state, currentSong: nextSong, playing: false }
        default:
            return state;
    }
}