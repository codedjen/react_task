import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Stylo the<br /> Shopping</h2>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li>Product</li>
                            <li>Brand</li>
                            <li>Sitemap</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li>Trade Professional</li>
                            <li>Locate</li>
                            <li>Email</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact Us</h4>
                        <p>+1(999)888-66-55</p>
                        <p>hellostyloshop.com</p>
                    </div>
                    <div className="footer-column">
                        <h4>Location</h4>
                        <p>43567.Wangon</p>
                        <p>Ranjinganraya 22/2/5. Office 4</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>©stylo-shopping 2024. All Rights Reserved</p>
                    <div className="footer-social">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">TikTok</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
