import React from 'react'
import { Button, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout';
import { LOGOUT } from '../store/reducer/user/userActionTypes';

function Navbar() {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };
  return (
    <div className="h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl flex flex-row justify-around">
      <div></div>
      <div>
        <i className="fa fa-spotify mr-5"></i>
        <span onClick={() => navigate("")} style={{ cursor: "pointer" }}>Web Music</span>
      </div>
      <div>
        {user ? (
          <div>
            {user.email}
            <IconButton onClick={handleLogout} color="primary" fontSize="inherit" size="large">
              <LogoutIcon fontSize="inherit" />
            </IconButton>
          </div>
        ) : (
          <Button variant="outlined" color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        )}

      </div>
    </div >

  )
}

export default Navbar