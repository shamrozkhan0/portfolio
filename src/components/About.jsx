import React from 'react'
import { motion } from "framer-motion";

import '../assets/components-style/About.css'
import aboutImage from '../assets/images/globe.avif'


const About = () => {

    let linkedinProfile = "https://www.linkedin.com/in/shamrozkhan-developer/";

    return (
        <section className='py-100' aria-label='About shamroz khan' id='bla' >
            <div className="row gap-5 gap-md-0">
                
                <div className="col-12 col-md-6 d-flex justify-content-center flex-column gap-4">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8}}
                        viewport={{once:true}}
                        className=" fw-bold ls-1 w-fit" style={{ color: 'white' }}>
                        A Byte About Me
                    </motion.h1>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8}}
                        viewport={{once:true}}
                        className="fs-18 lh-lg ls-1 text-white text-justify fw-semibold">
                        Hello! I'm a passionate <b className='text-info'>Full Stack Java Developer</b> with over 2 years of
                        experience building <b className="text-info"> dynamic web applications, REST APIs, and scalable solutions</b>. 
                        I specialize in writing clean, efficient code to solve real-world challenges.
                    </motion.p>

                    <motion.ul className='d-flex flex-column gap-2'>
                        <li className='fw-bold text-white fs-18'>Full stack java developer</li>
                        <li className='fw-bold text-white fs-18'>Student</li>
                    </motion.ul>

                </div>

        
                <motion.figure
                    initial={{scale: .5, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{duration: .8}}
                    viewport={{once: true}}
                    className="col-12 col-md-6 about-image-parent d-flex image-end-rs-center align-items-center">
                    <img src={aboutImage} alt="Image - Globe with code snippet and a card" className='w-100' />
                </motion.figure>
            </div>

        </section>
    )
}

export default About