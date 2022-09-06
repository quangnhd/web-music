import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SONG } from '../store/reducer/song/songActionTypes';

export default function Playing() {
  const { currentSong } = useSelector(state => state.song)
  const dispatch = useDispatch()

  const handeClickNext = () => {
    dispatch({ type: SET_SONG, payload: currentSong.id + 1 })
  }
  const handleClickPrevious = () => {
    dispatch({ type: SET_SONG, payload: currentSong.id - 1 })
  }

  return (
    <div>
      <AudioPlayer
        className='playing-music'
        src={currentSong.url}
        layout="stack-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handeClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  )
}
