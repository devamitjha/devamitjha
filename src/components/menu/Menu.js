import React from 'react';
import {Link} from 'react-router-dom'
import './menu.scss';

const currentYear = new Date().getFullYear();

const Menu = (props) => {
    const { onClick } = props;
  return (
    <div className={props.active? 'navigation__overlay active' : 'navigation__overlay'}>
        <div className={props.active? 'closeMenu active' : 'closeMenu'} onClick={onClick}>
            <span></span>
            <span></span>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="navigation__items">
            <div className={props.active? 'navigation__container active' : 'navigation__container'}>
                <div className="navigation__link">
                    <Link to="/v2" className="active" data-number="1" onClick={onClick}>Homev2</Link>
                </div>
                <div className="navigation__link" onClick={onClick}>
                    <Link to="/" data-number="2">Blog</Link>
                </div>
                <div className="navigation__link" onClick={onClick}>
                    <Link to="/" data-number="3">Shop</Link>
                </div>
                <div className="navigation__link" onClick={onClick}>
                    <Link to="/" data-number="4">Features</Link>
                </div>
                <div className="navigation__link" onClick={onClick}>
                    <Link to="/" data-number="5">Contact</Link>
                </div>
            </div>
        </div>
        <div className={props.active? 'copyright-wrapper active' : 'copyright-wrapper'}>
            <p className="copyright">© {currentYear} DEVAMITJHA</p>
        </div>
    </div>
  )
}

export default Menu