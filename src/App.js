import './App.css'
import Navbar from './components/Navbar'
import Homepage from './page/Homepage'
import Login from './page/Login/Login'
import Register from './page/Register/Register'
import Setting from './page/Setting/Setting'
import { Route, Routes } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie';
import { RESTORE_USER } from './store/reducer/user/userActionTypes'

const cookies = new Cookies();
function App() {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  if (!user) {
    const prevUser = cookies.get('user');
    const prevToken = cookies.get('token');
    if (prevUser && prevToken) {
      dispatch({ type: RESTORE_USER, payload: prevUser });
    }
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App
