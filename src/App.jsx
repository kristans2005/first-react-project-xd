import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './diena.jsx'
import Diena from './diena.jsx'

function App() {
  return (
    <>
    <Diena nosaukums="pirmdiena" />
    <Diena nosaukums="otradiena" />
    <Diena nosaukums="tresdiena" />
    <Diena nosaukums="ceturtdiena" />
    <Diena nosaukums="piektdiena" />
    
    </>
  )
}

export default App
