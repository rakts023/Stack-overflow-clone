import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestions from './Pages/AskQuestions/AskQuestions'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Questions' element={<Questions/>}/>
      <Route path='/AskQuestions' element={<AskQuestions/>}/>
      <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
      <Route path='/Tags' element={<Tags/>}/>
      <Route path='/Users' element={<Users/>}/>
      <Route path='/Users/:id' element={<UserProfile/>}/>
    </Routes>
  )
}

export default AllRoutes
