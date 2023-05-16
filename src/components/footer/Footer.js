import React from 'react';
import './Footer.scss';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="dark">
        <div className="bg"></div>
        <div className="relatve_container section_wrapper">
            <div className="copyright">© {currentYear} DEVAMITJHA. All rights reserved.</div>
            <ul className="social">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
                <li><i className="fa fa-instagram"></i></li>
                <li><i className="fa fa-youtube"></i></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer