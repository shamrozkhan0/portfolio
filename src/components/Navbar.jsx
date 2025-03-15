import React from 'react';
import '../assets/components-style/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <h1 className="text-white fw-bold">
                <a className="text-decoration-none text-white" href="#" aria-label="Shamroz Khan's portfolio">Shamroz Khan</a>
            </h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="fas fa-bars text-white fs-18" aria-hidden="true"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-align-center d-flex justify-content-center gap-4 gap-lg-3">
                    <li className="nav-item">
                        <a className="nav-link fw-medium text-white active px-4 py-2 fs-18" href="bla"
                          onClick={(e)=>{
                            e.preventDefault();
                            document.getElementById("bla").scrollIntoView({behavior: "smooth"});
                          }}
                        >View my work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link web-button-orange rounded-pill fw-semibold text-center text-white 
                            active px-5 py-2 fs-18 web-button-orange" href="#">HIRE ME</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
