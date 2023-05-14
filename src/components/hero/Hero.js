import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';

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
                    <li><Link className="link" to="https://github.com/devamitjha?tab=repositories" target="_blank">Git</Link></li>
                    <li><Link className="link" to="https://www.instagram.com/devamitjha/" target="_blank">Instagram</Link></li>
                    <li><Link className="link" to="https://www.facebook.com/devamitjha" target="_blank">Facebook</Link></li>
                    <li><Link className="link" to="https://in.linkedin.com/in/devamitjha" target="_blank">Linkedin</Link></li>
                    <li><Link className="link" to="https://www.youtube.com/c/devamitjha" target="_blank">Youtube</Link></li>
                </ul>
            </div>  
        </div>
        <div className="link_bottom">
            <Link className="link" to="mailto:techamitjha@gmail.com">E: <span>techamitjha@gmail.com</span></Link>
            <Link className="link" to="tel:+91 9967175225">T: +91 9967175225</Link>
        </div> 
    </div>
</section>
  )
}

export default Hero