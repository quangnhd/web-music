/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Songs } from '../Context';
import { SET_SONG } from '../store/reducer/song/songActionTypes';

export default function ListSong() {
  const { songs, currentSong, } = useSelector(state => state.song)
  const dispatch = useDispatch()
  const [idSong, setidSong] = useState(0);

  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    dispatch({ type: SET_SONG, payload: idSong })
  };

  useEffect(() => {
    setidSong(currentSong.id)
  }, [currentSong])

  return (
    <div className='col-span-2 overflow-y-scroll'>
      <table className='table-auto w-full'>
        <thead className='text-white h-12'>
          <tr>
            <th className='w-[10%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa-solid fa-heart'></i></th>
          </tr>
        </thead>
        <tbody>
          {
            songs.map((song, index) => (
              <tr key={index} className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 ${idSong === song.id && 'bg-gray-600 text-teal-400'}`}
                onClick={() => handlePlaySong(song.id)}>
                <td className='text-center'>{index + 1}</td>
                <td>{song.name}</td>
                <td className='text-center'>{song.author}</td>
                <td className='text-center'>
                  <a href={song.url}></a>
                  <i className='fa fa-download'></i>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
