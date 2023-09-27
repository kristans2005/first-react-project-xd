import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './diena.jsx'
import Diena from './diena.jsx'


function App() {
  const PirmdienasStundas = [
    "Datorsistēmas un datortīkli",
    "Datorsistēmas un datortīkli",
    "Sistēmu programmēšan",
    "Sistēmu programmēšan"
]
  return (
    <>
    <Diena nosaukums="pirmdiena" />
    <Diena nosaukums="otradiena" />
    <Diena nosaukums="tresdiena" stunda= {PirmdienasStundas[0]} />

  
    <Diena nosaukums="ceturtdiena" />
    <Diena nosaukums="piektdiena" />
    
    </>
  )
}

export default App
