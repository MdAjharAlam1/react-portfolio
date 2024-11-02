import React from 'react'
import './Footer.css'
import footerLogo from '../assets/footer_logo.svg'
import userIcon from '../assets/user_icon.svg'
import Logo from './Logo'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <Logo/>
                <p>I am a frontend developer from Jharkhand , India with 1 years of experience in mutliple companies like microsoft,Tesla and Apple.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={userIcon} alt="" />
                    <input type="email" placeholder='Enter Your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>© 2024 Md Ajhar Alam. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}
export default Footer;


