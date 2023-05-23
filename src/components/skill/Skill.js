import React from 'react';
import './Skill.scss';
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

const Skill = () => {
  return (
    <motion.section className="skill dark">
        <div className="bg"></div>
        <motion.div className="relatve_container section_wrapper" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
            <motion.div className="section_left" variants={item}>
                <div className="section_title">
                    <h3>MY SKILL & SERVICE</h3>
                </div>
                <div className="section_info">
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>Javascript/jQuery</li>
                        <li>React Js</li>
                        <li>Node/Express</li>
                        <li>Mongo DB</li>
                        <li>React Native</li>
                        <li>Magento 2+</li>
                        <li>Knockout Js</li>
                        <li>GA/GTM</li>
                    </ul>
                </div>
            </motion.div>
            <motion.div className="section_right" variants={item}>
                <div className="section_info">
                   <h3>I've always been captivated by the seamless synergy between design and development, and my broad skill set spans UX, design, front-end, and back-end development. I find joy in every aspect of the process, relishing the opportunity to build websites and mobile apps from inception to completion, serving clients globally.</h3>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Skill