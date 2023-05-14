import React from 'react';
import './Career.scss';

const Career = () => {
  return (
    <section className="career">
        <div className="bg"></div>
        <div className="relatve_container section_wrapper">
            <div className="item">
                <div className="section_title">
                    <h3>MY CAREER</h3>
                </div>
                <div className="section_info">
                    <h3>NBC PVT LTD. <span>2008 - 2012</span></h3>
                    <h2>Creative Designer</h2>
                    <p>As a creative designer, I've embraced visual storytelling, utilizing Photoshop, CorelDRAW, and Illustrator. From daily newspapers to monthly magazines, I blend aesthetics and functionality to create captivating visual experiences.</p>
                </div>
                <div className="section_info">
                    <h3>NBC PVT LTD. <span>2012 - 2015</span></h3>
                    <h2>Front-End Developer</h2>
                    <p>As a frontend developer, I specialize in HTML, CSS, and jQuery to create immersive web experiences. With design expertise and clean code, I build visually appealing, user-friendly websites, blending creativity with technical proficiency.</p>
                </div>
                <div className="section_info">
                    <h3>Enovate Lifestyle PVT LTD. <span>Since 2015</span></h3>
                    <h2>Sr. Front-End Developer</h2>
                    <p>As a senior frontend developer, I excel in JavaScript, React.js, Express.js, MongoDB, and React Native. I architect scalable solutions, prioritize code quality, and mentor junior developers for impactful web and mobile development.</p>
                </div>
            </div>            
        </div>
    </section>
  )
}

export default Career