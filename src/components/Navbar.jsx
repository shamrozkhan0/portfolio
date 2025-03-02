import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md py-3">
            <h1 className="text-white fw-bold">
                <a className="text-decoration-none text-white" href="#" aria-label="Shamroz Khan's portfolio">Shamroz Khan</a>
            </h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="fas fa-bars text-white fs-18" aria-hidden="true"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav gap-4 gap-lg-3">
                    <li className="nav-item">
                        <a className="nav-link text-white active" href="#">View my work</a>
                    </li>
                    <li className="nav-item">
                        <a className="web-button-orange text-decoration-none fw-medium text-white text-center rounded-3 px-4 py-2 fs-18"
                            href="#" role="button" aria-label="Hire me">Hire me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
