import { LIKE_FAILURE, LIKE_SUCCESS, LOAD_FAILURE, LOAD_LIKE_FAILURE, LOAD_LIKE_SUCCESS, LOAD_REQUEST, LOAD_SUCCESS, SET_SONG, UNLIKE_FAILURE, UNLIKE_SUCCESS } from "./songActionTypes";

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
    case LOAD_LIKE_SUCCESS:
      const likes = payload;
      const songs = state.songs.map(song => {
        const like = likes.find(l => l.songId === song.id)
        if (like) {
          song.like = like
        }
        return song
      })
      return {
        ...init,
        loading: false,
        songs: songs,
        currentSong: songs[0],
      }
    case LIKE_SUCCESS:
      const likeSong = state.songs.find(s => s.id === payload.songId)
      likeSong.like = payload
      return { ...state, songs: state.songs };
    case UNLIKE_SUCCESS:
      const unlikeSong = state.songs.find(s => s.id === payload)
      unlikeSong.like = null
      return { ...state, songs: state.songs };
    case LOAD_FAILURE:
    case LOAD_LIKE_FAILURE:
    case LIKE_FAILURE:
    case UNLIKE_FAILURE:
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