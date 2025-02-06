import React from 'react'


const Navbar = () => {


  return (

<nav className="navbar navbar-expand-lg " role='navigation'>
  <div className="container px-0">
    <a className="navbar-brand text-white fw-bold" href="#">
      <h1 className='fw-bold text-h-white'>Shamroz khan</h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      {/*
     
     - BootStrap icon
      - Ran into some problem during developement  
      <span className="navbar-toggler-icon"></span> 
     
     */}

      {/*  Alternative to BootStrap icon */}
      <i className='fas fa-bars fs-2 text-white'></i>
    
    </button>
    <div className="collapse navbar-collapse justify-content-end text-white" id="navbarNav">
      <ul className="navbar-nav align-items-center  gap-4">
        {/* <li className="nav-item"><a className="nav-link transition03 link text-h-white fw-bold fs-18" href="#">Home</a></li> */}
        <li className="nav-item"><a className="nav-link transition03 link text-h-white fw-thin fs-18" href="#">Projects</a></li>
        <li className="nav-item"><a className="web-button d-block transition03 px-4 py-2 text-decoration-none rounded-pill
             text-h-white fw-medium fs-18" href="#">Contact</a></li>
      </ul> 
    </div>
  </div>
</nav>

  )
}

export default Navbar