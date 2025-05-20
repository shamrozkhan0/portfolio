import  { Suspense} from 'react'

import Scroll from './Components/Scroll'
import Navbar from './components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Skill from './Components/Skill'
import '../index.css'


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
      {/*<Project/>*/}


    </>
  )
}

export default App