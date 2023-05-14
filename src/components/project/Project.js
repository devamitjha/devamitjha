import React from 'react';
import './Project.scss';

const Project = () => {
  return (
    <section className="project">
        <div className="bg"></div>
        <div className="relatve_container section_wrapper">
            <div className="section_left">
                <div className="section_title">
                    <h3>MY PROJECT</h3>
                </div>
                <div className="section_info">
                    <h2>Showcasing a Collection of Projects</h2>
                    <p>Explore a Diverse Range of Engaging Web Projects, Seamlessly Blending Design and Functionality  to Deliver Engaging User Experiences.</p>
                </div>
            </div>
            <div className="section_right">
                <div className="section_info">
                    <img src="images/demo.jpg" alt="demo"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project