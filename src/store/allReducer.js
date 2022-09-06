import { combineReducers } from 'redux'
import userReducer from './reducer/user/userReducer'
import songReducer from './reducer/song/songReducer'

export default combineReducers({
    user: userReducer,
    song: songReducer
})