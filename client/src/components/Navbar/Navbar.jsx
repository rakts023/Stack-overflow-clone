import React, { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from "jwt-decode"

import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
// import bars from "../../assets/bars-solid.svg"

var Navbar = () => {
  const dispatch = useDispatch()
  const User = useSelector(state => (state.currentUserReducer))  //by redux we get the details stored in localStorage
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate("/")
    dispatch(setCurrentUser(null))
  }

  // useEffect(() =>{
  //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  // },[dispatch])

  useEffect(() => {
    const token = User?.token
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  }, [User?.token, dispatch])



  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={ logo } alt="logo" />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Product</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type="text" placeholder='Search...' />
          <img src={ search } alt="search" width="18" className='search-icon' />
        </form>
        { 
          User === null ? 
            <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
            <>
              <Avatar backgroundColor="#009dff" padding="2px 7px 3px 7px" borderRadius="50%" color="white"><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:"none"}}>{User?.result?.name?.charAt(0)?.toUpperCase()}</Link></Avatar>
              <button className='nav-item nav-links' onClick={ handleLogout }  >Log Out</button>
            </>
        }
      </div>
    </nav>
  )
}

export default Navbar
