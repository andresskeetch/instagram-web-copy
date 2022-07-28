import React from 'react'
import { NavBar } from './components'
import { Router } from './shared/router'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Router />
    </div>
  )
}

export default App
