import React from "react";
import { motion } from "framer-motion";

import BannerImage from "../assets/images/banner.webp";
import resume from "../assets/file/Resume.pdf";
import "../assets/components-style/Banner.css";

const resumeLink =
  "https://drive.google.com/file/d/1U8ENVzInN4P78f8-tPSWK7v-fitgMXvl/view?usp=drive_link";

const Banner = () => {
  return (
    <motion.section
      aria-label="Full stack java developer"
      className="row py-100 gap-5 gap-md-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="col-12 col-md-6 d-flex flex-column gap-3 justify-content-between"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <header>
          <motion.h1
            className="w-fit fs-80 fw-xbold d-flex flex-column"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="web-heading">Full-Stack</span>
            <span className="web-heading">Java</span>
            <span className="web-heading">Developer</span>
            <span className="web-heading">Portfolio</span>
          </motion.h1>
        </header>

        <motion.p
          className="text-light fw-medium fs-18 lh-base web-heading"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          2+ years of experience in building seamless websites | Web Applications
          and REST APIs
        </motion.p>

        <motion.nav
          className="d-flex align-items-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.a
            href={resume}
            aria-label="Download Resume"
            className="web-button text-white border-0 px-3 py-2 rounded-2 fs-18 fw-medium text-decoration-none"
            download
            whileHover={{ scaleX: 0.9, duration:1, delay:1 }}
          >
            Download Resume
          </motion.a>

          <motion.a
            aria-label="Review Resume"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            Review Resume
          </motion.a>
          
        </motion.nav>
      </motion.div>

      <motion.figure
        className="col-12 col-md-6 d-flex align-items-center justify-content-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.img
          src={BannerImage}
          alt="Banner-Image - braces with screen and books"
          loading="lazy"
          className="w-100 h-100 banner-img"
        />
      </motion.figure>
    </motion.section>
  );
};

export default Banner;
