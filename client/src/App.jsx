import React from 'react'
import Auth from './pages/Auth'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Interview from './pages/Interview'
import Report from './pages/Report'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/interview' element={<Interview/>}/>
      <Route path='/report' element={<Report/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
