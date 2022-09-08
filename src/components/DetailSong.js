import React from 'react'
import { useSelector } from 'react-redux'

function DetailSong() {
  const {
    currentSong,
  } = useSelector(state => state.song)
  return (
    <div className='col-span-1 p-3'>
      <h2 className='text-cyan-500 font-bold'>Now Playing</h2>
      <h2 className='text-neutral-400 text 2xl'>{currentSong.name}</h2>
      <div className='w-[240px] m-auto mt-10'>
        <img className='w-full' src={currentSong.links.images[0].url} alt='avatar' />
      </div>
      <div className='flex justify-evely items-center mt-10'>
        <img className='w-[70px] rounded-full' src={currentSong.links.images[1].url} alt='avatar' />
        <span className='text-xl text-white '>{currentSong.author}</span>
      </div>
    </div>
  )
}

export default DetailSong