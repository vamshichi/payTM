import React from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import {Dashboard} from './routes/Dashboard'
import {Send} from './routes/Send'
import {Signup} from './routes/Signup'
import {Login} from './routes/Login'


function App() {
  return (
    <>
      <Routes>
        <Route path = '/dashboard' element = {<Dashboard />} />
        <Route path = '/send' element = {<Send />} />
        <Route path = '/' element = {<Signup />} />
        <Route path='/signin' element = {<Login />} />
      </Routes>
    </>
  )
}

export default App
