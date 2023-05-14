import React from 'react';
import './Skill.scss';

const Skill = () => {
  return (
    <section className="skill dark">
        <div className="bg"></div>
        <div className="relatve_container section_wrapper">
            <div className="section_left">
                <div className="section_title">
                    <h3>MY SKILL & SERVICE</h3>
                </div>
                <div className="section_info">
                    <ul>
                        <li>HTML5</li>
                        <li>Css3</li>
                        <li>Javascript</li>
                        <li>React Js</li>
                        <li>Node/Express</li>
                        <li>Mongo DB</li>
                        <li>React Native</li>
                        <li>Magento 2+</li>
                        <li>Knockout Js</li>
                    </ul>
                </div>
            </div>
            <div className="section_right">
                <div className="section_info">
                   <h3>I've always been captivated by the seamless synergy between design and development, and my broad skill set spans UX, design, front-end, and back-end development. I find joy in every aspect of the process, relishing the opportunity to build websites and mobile apps from inception to completion, serving clients globally.</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill