import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="about dark">
    <div className="bg"></div>
    <div className="relatve_container section_wrapper">
        <div className="section_left">
            <div className="section_title">
                <h3>ABOUT ME</h3>
            </div>
            <div className="section_info">
                <h2>Design-Driven Development: Creating Engaging Digital Experiences</h2>
            </div>
        </div>
        <div className="section_right">
            <div className="section_info">
                <p>I'm Amit Jha, a passionate frontend developer specializing in crafting exceptional digital experiences. With expertise in HTML, CSS, JavaScript, React.js, Express.js, and MongoDB, I excel in translating complex ideas into intuitive user interfaces. I thrive in collaborative team environments, staying up-to-date with industry trends and best practices to ensure high-quality, scalable solutions. Inspired by art, music, and literature, I bring a creative touch to every project.</p>
                <p> If you're looking for a dedicated frontend developer to bring your digital vision to life, let's collaborate and create remarkable experiences together.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default About