import React from 'react'
import Auth from './pages/Auth'
import Dashboard from './components/dashboard/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
