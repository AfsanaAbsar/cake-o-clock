import React from 'react';
import './Footer.css'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.jpg'
import twitter from '../../images/twitter.png'
const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright &copy; 2022</p>
            <p className='footer-logo'><img src={facebook} alt="" /><img src={instagram} alt="" /><img src={twitter} alt="" /></p>
        </div>
    );
};

export default Footer;