import React from 'react';
import './Career.scss';
import {motion} from 'framer-motion';

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

const Career = () => {
  return (
    <motion.section className="career">
        <div className="bg"></div>
        <motion.div className="relatve_container section_wrapper" >
            <motion.div className="item" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
                <motion.div className="section_title" variants={item} >
                    <h3>MY CAREER</h3>
                </motion.div>
                <motion.div className="section_info" variants={item}>
                    <h3>NBC PVT LTD. <span>2008 - 2012</span></h3>
                    <h2>Creative Designer</h2>
                    <p>As a creative designer, I've embraced visual storytelling, utilizing Photoshop, CorelDRAW, and Illustrator. From daily newspapers to monthly magazines, I blend aesthetics and functionality to create captivating visual experiences.</p>
                </motion.div>
                <motion.div className="section_info" variants={item}>
                    <h3>NBC PVT LTD. <span>2012 - 2015</span></h3>
                    <h2>Front-End Developer</h2>
                    <p>As a frontend developer, I specialize in HTML, CSS, and jQuery to create immersive web experiences. With design expertise and clean code, I build visually appealing, user-friendly websites, blending creativity with technical proficiency.</p>
                </motion.div>
                <motion.div className="section_info" variants={item}>
                    <h3>Enovate Lifestyle PVT LTD. <span>Since 2015</span></h3>
                    <h2>Sr. Front-End Developer</h2>
                    <p>As a senior frontend developer, I excel in JavaScript, React.js, Express.js, MongoDB, and React Native. I architect scalable solutions, prioritize code quality, and mentor junior developers for impactful web and mobile development.</p>
                </motion.div>
            </motion.div>            
        </motion.div>
    </motion.section>
  )
}

export default Career