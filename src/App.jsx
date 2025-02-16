import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/heroSection'
import VerticalScroll from './components/verticalScroll'
import Skill from './components/Skill'
import SkillsGallery from './components/SkillsGallery'

import './App.css'

function App() {

  return (
    <>
      <VerticalScroll/>
      <Navbar />
      <HeroSection/>
      {/* <Skill/> */}
      <SkillsGallery/>

    </>
  )
}

export default App
