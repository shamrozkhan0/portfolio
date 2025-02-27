import React  from 'react';
import Typed from 'typed.js';

import BannerImage from '../assets/images/banner.webp';
import resume from '../../public/files/resume.pdf';
import '../assets/components-style/Banner.css'

const resumeLink = "https://drive.google.com/file/d/1U8ENVzInN4P78f8-tPSWK7v-fitgMXvl/view?usp=drive_link";


const Banner = () => {

  // const el = React.useRef(null);

  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["<span class='web-heading'>Full Stack Java</span> <br> <span class='web-heading'>developer</span>"],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <section aria-label='Full stack java developer' className="row py-100  gap-5 gap-md-0">
        <div className="col-12 col-md-6 d-flex flex-column gap-3 justify-content-between">
        
          <h1 className='w-fit fs-60 fw-xbold d-flex flex-column  fadein'>
            <span className='web-heading'>Full-Stack</span>
            <span className='web-heading'>Java</span>
            <span className='web-heading'>Developer</span>
            <span className='web-heading'>Portfolio</span>
          </h1>
        
        <p className='text-light fw-medium fs-18 lh-base web-heading'>2+ years of experience in building seamless website | Web-Application And RestAPI  </p>


        <div className="d-flex align-items-center gap-3">

          <a
             href={resume}
             className='web-button text-white border-0 px-3 py-2 rounded-2 fs-18
                       fw-medium text-decoration-none' download>
            Download Resume
          </a>
          
          <a
            href={resumeLink} 
            target='_blank' rel="noopener noreferrer" 
            className=''>Review Resume
          </a>
        
        </div>
        

        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img src={BannerImage} alt="Banner-Image - braces  with screen and books" loading='lazy' className="w-100 h-100 banner-img"/>
        </div>
    </section>
  )
}

export default Banner;