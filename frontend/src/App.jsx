import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import myProfile from './pages/myProfile'
import myAppointments from './pages/myAppointments'
import Appointment from './pages/Appointment'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/'doctors element={<Doctor/>} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<myProfile />} />
        <Route path='/my-appointments' element={<myAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />

      </Routes>
    </div>
  )
}

export default App