import React from 'react';
import './Footer.scss';
import {motion, scrollY } from 'framer-motion';
import Scroll from '../SmoothScroll';

const currentYear = new Date().getFullYear();

const container = {
  show:{
      transition:{
          staggerChildren:0.2
      }
  }
};
const item = {
  hidden:{opacity:0,y:20},
  show:{
      opacity:1,
      y:0,
      transition:{
          ease:'easeInOut',
          duration:.7
      }
  }
}

const Footer = () => {
  return (
    <>
    <Scroll/>
    <motion.footer className="dark">
        <div className="bg"></div>
        <motion.div className="relatve_container section_wrapper" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
            <motion.div className="copyright"  variants={item}>© {currentYear} DEVAMITJHA. All rights reserved.</motion.div>
            <motion.ul className="social">
                <motion.li variants={item}><i className="fa fa-facebook"></i></motion.li>
                <motion.li variants={item}><i className="fa fa-linkedin"></i></motion.li>
                <motion.li variants={item}><i className="fa fa-instagram"></i></motion.li>
                <motion.li variants={item}><i className="fa fa-youtube"></i></motion.li>
            </motion.ul>
        </motion.div>
    </motion.footer>
  </>
  )
}

export default Footer