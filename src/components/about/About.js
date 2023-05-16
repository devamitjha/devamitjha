import React from 'react';
import './About.scss';
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

const About = () => {
  return (
    <motion.section className="about dark" >
        <div className="bg"></div>
        <motion.div className="relatve_container section_wrapper" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
            <motion.div className="section_left" variants={item}>
                <div className="section_title">
                    <h3>ABOUT ME</h3>
                </div>
                <div className="section_info">
                    <h2>Design-Driven Development:<br/>Creating Engaging Digital Experiences</h2>
                </div>
            </motion.div>
            <motion.div className="section_right" variants={item}>
                <div className="section_info">
                    <p>I'm Amit Jha, a passionate frontend developer specializing in crafting exceptional digital experiences. With expertise in HTML, CSS, JavaScript, React.js, Express.js, and MongoDB, I excel in translating complex ideas into intuitive user interfaces. I thrive in collaborative team environments, staying up-to-date with industry trends and best practices to ensure high-quality, scalable solutions. Inspired by art, music, and literature, I bring a creative touch to every project.</p>
                    <p> If you're looking for a dedicated frontend developer to bring your digital vision to life, let's collaborate and create remarkable experiences together.</p>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default About