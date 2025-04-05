import React, { Suspense, lazy } from 'react'
import { motion } from "framer-motion";

import Scroll from './Components/Scroll'
import Navbar from './components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Skill from './Components/Skill'
import Project from './Components/Project';
import '../index.css'

const HeavyBannerSection = lazy(() => import('./Components/Banner'))

const App = () => {
  return (
    <>
      <Scroll/>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>
      <About/>
      <Skill/>
      {/* <Project/> */}


    </>
  )
}

export default App