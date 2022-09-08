import DetailSong from '../components/DetailSong'
import ListSong from '../components/ListSong'
import Playing from '../components/Playing'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_REQUEST } from '../store/reducer/song/songActionTypes'

function Homepage() {
  const { songs,
    currentSong,
  } = useSelector(state => state.song)
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: LOAD_REQUEST })
  }, [user, dispatch])

  return (
    <div>
      {songs && currentSong ? (
        <>
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
  )
}

export default Homepage