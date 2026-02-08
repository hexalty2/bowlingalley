import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="brand">
                <h1>Bowling Alley</h1>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Email: info@bowlingalley.com</p>
                <p>Phone: 555-1234</p>
            </div>
            <div className="hours">
                <h2>Hours</h2>
                <p>Monday to Friday: 10 AM - 11 PM</p>
                <p>Saturday: 9 AM - 12 AM</p>
                <p>Sunday: 9 AM - 10 PM</p>
            </div>
            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Bowling</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;