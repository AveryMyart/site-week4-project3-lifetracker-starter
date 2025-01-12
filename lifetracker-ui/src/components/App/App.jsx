import LandingPage from '../../pages/LandingPage/LandingPage'
import './App.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import RegisterPage from '../../pages/RegistrationPage/RegistrationPage'
import LoginPage from "../../pages/LoginPage/LoginPage"
import ActivityPage from '../../pages/ActivityPage/ActivityPage'
import SleepPage from '../../pages/SleepPage/SleepPage'
import SleepCreatePage from '../../pages/SleepCreatePage/SleepCreatePage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [appState, setAppState] = useState({
    user:{},
    isAuthenticated: false,
    nutrition: "",
    sleep: "",
    exercise:""
  })


console.log(appState)





  //TODO

  

  return (
    <div className="app">
    <BrowserRouter>
      <Navbar appState={appState} setAppState={setAppState}/>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/register" element={<RegisterPage setAppState={setAppState}/>}/>
        <Route path="/login" element={<LoginPage setAppState={setAppState} appState={appState} />}/>
        <Route path="/activity" element={<ActivityPage setAppState={setAppState} appState={appState}/>}/>
        <Route path="/sleep" element={<SleepPage setAppState={setAppState} appState={appState}/>}/>
        <Route path="/sleep/create" element={<SleepCreatePage setAppState={setAppState} appState={appState}/>}/>
     </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
