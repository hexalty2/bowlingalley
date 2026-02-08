import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>Bowling Alley</h1>
                <p>Your favorite place for family fun!</p>
                {/* Removed the line "Plaisir familial depuis 1985" */}
                <p>&copy; Your Company Name</p>
            </div>
        </footer>
    );
};

export default Footer;