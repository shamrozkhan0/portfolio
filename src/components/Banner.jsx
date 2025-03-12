import React from "react";
import { motion } from "framer-motion";

import BannerImage from "../assets/images/banner.webp";
import resume from "../assets/file/Resume.pdf";
import "../assets/components-style/Banner.css";
import apeImage from '../assets/images/profile.webp';

const resumeLink = "https://drive.google.com/file/d/1U8ENVzInN4P78f8-tPSWK7v-fitgMXvl/view?usp=drive_link";
  

const Banner = () => {
  return (
    <motion.section
      aria-label="Full stack java developer"
      className="row py-100 gap-5 gap-md-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
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
          >
            <span className="web-heading">Full-Stack</span>
            <span className="web-heading">Java</span>
            <span className="web-heading">Developer</span>
            <span className="web-heading">Portfolio</span >
          </motion.h1>
        </header>

        <motion.p
          className="text-light fw-medium fs-18 lh-base web-heading lh-1"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}

        >
          Website Apllications | SAAS Enthusiast |  REST-APIs
        </motion.p>

        <motion.nav
          className="d-flex align-items-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            aria-label="Download Resume"
            href={resume}
            className="web-button-orange text-white border-0 px-3 py-2 rounded-2 fs-18 fw-medium text-decoration-none"
            download
            whileHover={{ scaleX: 0.9, duration: 1, delay: 1 }}
            viewport={{ once: true }}

          >
            Download Resume
          </motion.a>

          <motion.a
            aria-label="Review Resume"
            href={resumeLink}
            className="web-button-blue px-3 py-2 text-decoration-none text-light fs-18 fw-semibold rounded-2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scaleX: 0.9 }}
            viewport={{ once: true }}
          >
            View Resume
          </motion.a>

        </motion.nav>
      </motion.div>

      <motion.figure
        className="col-12 col-md-6 d-flex align-items-center image-end-rs-center position-relative"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: true }}

      >

        <motion.div
          className="circle rounded-circle p-1 d-none d-lg-block"
          animate={{ y: [0, 30, 0] }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1} // Reduces stretch effect
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ cursor: "grab" }} // Ensures proper cursor behavior
        >
          <img
            className="w-100 h-100 rounded-circle"
            src={apeImage}
            alt="APE NFT - created by Shamroz Khan"
            style={{ pointerEvents: "none" }}
          />
        </motion.div>



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
