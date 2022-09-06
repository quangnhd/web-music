import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './Context';
import Playing from './components/Playing';
import { useEffect, useState } from 'react';
import { getAll } from './api/song';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_REQUEST } from './store/reducer/song/songActionTypes';

function App() {
  const { songs,
    currentSong,
  } = useSelector(state => state.song)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: LOAD_REQUEST })
  }, [])

  return (
    <div className="App">
      {songs && currentSong ? (
        <>
          <Navbar />
          <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
            {/* span 1 */}
            <DetailSong />
            {/* span 2 */}
            <ListSong />
          </div>
          <Playing />
        </>
      ) : null}
    </div>
  );
}

export default App;
