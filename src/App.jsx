import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { SpotFormPage } from './pages/SpotFormPage'


import './App.css'

function App() {

  return (
    <>
      <main className='App'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/new-spot" element={<SpotFormPage/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
