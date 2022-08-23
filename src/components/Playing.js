import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export default function Playing() {
  const {song, handleSetSong} = useContext(Songs)
  const handeClickNext = () => {
    handleSetSong(song.id + 1)
  }
  const handleClickPrevious = () => {
    handleSetSong(song.id - 1)
  }
  return (
    <div>
      <AudioPlayer
        className='playing-music'
        src={song.url}
        layout="stack-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handeClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  )
}
