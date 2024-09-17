import React from 'react'

import { Routes,Route } from 'react-router-dom'
import Banner from '../components/Banner'
import About from '../pages/About'
import Contact from "../pages/Contact"
import Courses from "../pages/Course"
import Login from '../pages/Login'
import AddCourse from '../admin_pannel/AddCourse'
import Admin from '../admin_pannel/Admin_layout'
import Register from '../pages/Register'


function Router() {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Banner/>} />
        <Route path='/about' element={<About/>} />
        <Route path = '/courses' element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path ='/login' element={<Login/>} />
        <Route path = '/addcourse' element = {<AddCourse/>} />
        <Route path ='/admin' element={<Admin/>} />
        <Route path='/signup' element={<Register/>}/>

    </Routes>
      
    </>
  )
}

export default Router
