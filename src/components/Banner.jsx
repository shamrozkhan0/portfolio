import { motion } from "framer-motion";

import BannerImage from "../assets/images/banner.avif";
// import resume from "../assets/file/shamroz-resume.pdf";
import resume from "../assets/images/shamroz.jpg"
import "../assets/components-style/Banner.css";
import profileImage from '../assets/images/shamroz.jpg';

// const resumeLink = "https://drive.google.com/file/d/1oQt16x_dP1v_siWFRsE8rPFsgY4cug6U/view?usp=drive_link";
const resumeLink = "https://www.github.com/shamrozkhan0"
const Banner = () => {

  return (
    <>

      <motion.section
        aria-label="Full stack java developer portfolio section"
        className="row py-100 gap-5 gap-md-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        itemScope
        itemType="http://schema.org/Person" 
      >
        <motion.div
          className="col-12 col-md-6 d-flex flex-column gap-3 justify-content-between"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <header>
            <motion.h1
              className="w-fit fs-80 fw-xbold d-flex flex-column"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              itemProp="name"
            >
              <span className="web-heading">Full-Stack</span>
              <span className="web-heading">Java</span>
              <span className="web-heading">Developer</span>
              <span className="web-heading">Portfolio</span>
            </motion.h1>
          </header>

          <motion.p
            className="text-light fw-medium fs-18 lh-base web-heading lh-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            itemProp="description"
          >
            Website Applications | SAAS Enthusiast | REST-APIs
          </motion.p>

          <motion.nav
            className="d-flex align-items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              aria-label="Download Resume PDF"
              href={resume}
              className="web-button-orange text-white border-0 px-3 py-2 rounded-2 fs-18 fw-medium text-decoration-none"
              download
              whileHover={{ scaleX: 0.9, duration: 1, delay: .3 }}
              viewport={{ once: true }}
              itemProp="downloadUrl"
            >
              Download Resume
            </motion.a>

            <motion.a
              aria-label="View Resume on Google Drive"
              href={resumeLink}
              className="web-button-blue px-3 py-2 text-decoration-none text-light fs-18 fw-semibold rounded-2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scaleX: 0.9 }}
              viewport={{ once: true }}
              itemProp="url"
            >
              View Resume
            </motion.a>
          </motion.nav>
        </motion.div>

        <motion.figure
          className="col-12 col-md-6 d-flex align-items-center image-end-rs-center position-relative"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="circle rounded-circle p-1 d-none d-lg-flex align-items-center justify-content-center "
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >

            {/* <h1 className="text-light text-center w-100 ls-1 fw-xbold"> {"</>"} </h1> */}

            <img
              className="w-100 h-100 rounded-circle"
              src={profileImage}
              alt="Professional headshot of Shamroz Khan"
              loading="lazy"
              style={{ pointerEvents: "none" }}
              itemProp="image"
            />
          </motion.div>

          <motion.img
            src={BannerImage}
            alt="Developer workspace with computer screen and programming books"
            loading="lazy"
            className="w-100 h-100 banner-img"
            itemProp="image"
          />
        </motion.figure>
      </motion.section>
    </>
  );
};

export default Banner;
