/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LIKE_REQUEST, LOAD_LIKE_REQUEST, SET_SONG, UNLIKE_REQUEST } from '../store/reducer/song/songActionTypes';

function ListSong() {
  const { songs, currentSong, } = useSelector(state => state.song)
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handlePlaySong = (idSong) => {
    dispatch({ type: SET_SONG, payload: idSong })
  };

  useEffect(() => {
    if (user) {
      dispatch({ type: LOAD_LIKE_REQUEST, payload: user.id })
    }
  }, [dispatch, user])

  const handleLikeClick = (song) => {
    return () => {
      if (song.like) {
        dispatch({ type: UNLIKE_REQUEST, payload: song.like })
      } else {
        dispatch({ type: LIKE_REQUEST, payload: { userId: user.id, songId: song.id } })
      }
    }
  }

  return (
    <div className='col-span-2 overflow-y-scroll'>
      <table className='table-auto w-full'>
        <thead className='text-white h-12'>
          <tr>
            <th className='w-[10%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa fa-heart'></i></th>
          </tr>
        </thead>
        <tbody>
          {
            songs.map((song, index) => (
              <tr key={index} className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 ${currentSong.id === song.id && 'bg-gray-600 text-teal-400'}`}
                onClick={() => handlePlaySong(song.id)}>
                <td className='text-center'>{index + 1}</td>
                <td>{song.name}</td>
                <td className='text-center'>{song.author}</td>
                <td className='text-center' style={{ cursor: "pointer", color: song.like ? "red" : "white" }} onClick={handleLikeClick(song)}>
                  <a href={song.url}></a>
                  <i className='fa fa-heart'></i>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListSong