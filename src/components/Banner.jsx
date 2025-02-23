import React  from 'react';
import Typed from 'typed.js';

import BannerImage from '../assets/svg/banner-image.svg';

import '../assets/components-style/Banner.css'
const Banner = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<span class='web-heading'>Full Stack Java</span> <br> <span class='web-heading'>developer</span>"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section aria-label='Full stack java developer' className="row py-100">
        <div className="col-6 d-flex flex-column gap-3 justify-content-between">
          <h1 className='w-fit fs-60 fw-semibold ' ref={el}></h1>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={BannerImage} alt="banner" loading='lazy' className="w-100 banner-img"/>
        </div>
    </section>
  )
}

export default Banner;