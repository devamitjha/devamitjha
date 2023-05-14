import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
    <div className="bg"></div>
    <div className="relatve_container section_container">
        <div className="box"></div>
        <div className="section_row">
            <div className="content_section">
                <div className="heading_container">
                    <h3 className="heading_secondary">My Portfolio</h3>
                    <h2 className="heading_primary">
                        <span>Crafting Digital Solutions Tailored to Your Vision</span>
                    </h2>
                </div>
            </div>
            <div className="bio left">
                <h3 className="heading_secondary">I'M AMIT JHA CREATIVE DEVELOPER</h3>
            </div>
            <div className="social right">
                <ul>
                    <li><a className="link">Git</a></li>
                    <li><a className="link">Instagram</a></li>
                    <li><a className="link">Facebook</a></li>
                    <li><a className="link">Linkedin</a></li>
                    <li><a className="link">Youtube</a></li>
                </ul>
            </div>  
        </div>
        <div className="link_bottom">
            <a className="link">E: <span>techamitjha@gmail.com</span></a>
            <a className="link">T: +91 9967175225</a>
        </div> 
    </div>
</section>
  )
}

export default Hero