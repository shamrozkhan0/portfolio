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
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className=" fw-bold ls-1 w-fit web-heading">
                        HELLO! <span className='text-white'> I'm Shamroz Khan</span>
                    </motion.h1>


                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className="fs-18 lh-lg ls-1 text-white text-justify fw-semibold">
                        A highly skilled Full Stack Java Developer with a strong expertise in both frontend and backend development.
                    </motion.p>

                    <motion.ul 
                    initial={{y:-50 , opacity:0}}
                    whileInView={{y:0 , opacity:1}}
                    transition={{duration:.8 , delay:.1}}
                    viewport={{once:true}}
                    className='d-flex flex-column gap-2 lh-base about-ul'>
                        <li className='text-white fw-semibold'>🔥 Full stack java developer</li>
                        <li className='text-white fw-semibold'>🚀 Quick Learner</li>
                        <li className='text-white fw-semibold'>🎓 BS Software Engineering ( Student ) </li>
                    </motion.ul>

                </div>


                <motion.figure
                    initial={{ scale: .5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="col-12 col-md-6 about-image-parent d-flex image-end-rs-center align-items-center">
                    <img src={aboutImage} className="w-100 h-100" alt="Image - Globe with code snippet and a card" />
                </motion.figure>
            </div>

        </section>
    )
}

export default About