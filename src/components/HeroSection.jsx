import React, { useDebugValue } from 'react'
import Typed from 'typed.js'

import HeroImage from '../assets/svg/hero-img.svg';
import '../assets/components-style/HeroSection.css'

const HeroSection = () => {


  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack java developer.'],
      typeSpeed: 50,
      onComplete: () => {
        setTimeout(() => {
          document.querySelector(".typed-cursor").remove()
        }, 500);
      },
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  const fileUrl = "../public/files/resume.pdf";
  const PdfPreviewLink = "https://drive.google.com/file/d/1U8ENVzInN4P78f8-tPSWK7v-fitgMXvl/view?usp=sharing";

  return (

    <header className='row  py-5 gap-3 gap-lg-0' itemscope itemtype="https://schema.org/Person">
      <div className="col-12 col-lg-7 d-flex align-items-start justify-content-center flex-column gap-3 ">

        <div className="header-text-parent">
          <h1 className='fw-bold text-h-white fs-60 text-blue ' itemProp='name'>Shamroz Khan <span className='text-white'>,</span></h1>
          <p className='fw-bold  text-h-white fs-60 ' itemProp='jobTitle'>  A <span className='text-blue' ref={el}></span> </p>
        </div>

        <div className="d-flex flex-column gap-4">

          <a target='_black' href='https://www.linkedin.com/in/shamrozkhan-developer/'
            className='fs-18 ls-1 gap-2 d-flex  text-white text-decoration-none font-code link-linkedin'>
              <span className='text-variable'>const</span>
              <span className='text-variable-name'>linkedin</span>
              <span className='text-white'>=</span>
              <span className='text-string'>"linkedin/shamrozkhan-developer/"<span className='text-white'>;</span></span>
          </a>

          <div className="d-flex align-items-center flex-column resume-btn flex-md-row gap-4 gap-md-3 ">
            <a href={fileUrl} download={true}
              className='fs-18 text-white text-decoration-none web-button text-center w-fit py-2 px-4 
                          rounded-pill transition03 hover ls-1'>Download CV</a>
           
            <a href={PdfPreviewLink} target='_black' className='btn-view text-white text-center text-decoration-none
               px-4 py-2 rounded-pill hover transition03 fs-18'>View Resume</a>
          </div>

        </div>

      </div>

      <div className="col-12 col-lg-5 banner-img d-flex justify-content-center">
        <img src={HeroImage} alt="Vector - a developer sits and have an background of different languages" />
      </div>

    </header>
  )
}

export default HeroSection