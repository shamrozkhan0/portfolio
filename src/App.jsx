import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/heroSection'
import VerticalScroll from './components/verticalScroll'

import './App.css'

function App() {

  return (
    <>
      <VerticalScroll/>
      <Navbar />
      <HeroSection/>
    </>
  )
}

export default App
