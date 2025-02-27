import React from 'react'
import { Helmet } from 'react-helmet'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="#">
                <h1 className='text-white fw-xbold'>Shamroz Khan</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="fas fa-bars text-white fs-18"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav gap-4 gap-lg-3">
                    <li className="nav-item">
                        <a className="nav-link text-white active"
                            aria-current="page" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white text-center web-btn rounded-pill px-4 py-2 fs-18"
                            href="#">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar