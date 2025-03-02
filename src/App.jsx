import React, { Suspense, lazy } from 'react'

import Navbar from './components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import '../index.css'

const HeavyBannerSection = lazy(() => import('./Components/Banner'))

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>
      <About/>


    </>
  )
}

export default App