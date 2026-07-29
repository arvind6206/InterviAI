import React from 'react'
import Auth from './pages/Auth'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Interview from './pages/Interview'
import Report from './pages/Report'
import Resume from './pages/Resume'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/interview' element={<Interview/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/settings' element={<Settings/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App
