import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
    // Function to scroll to a section
document.body.scrollToSection = (section) => {
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer>
            <ul>
                <li><a href="#" onClick={() => scrollToSection('section1')}>Section 1</a></li>
                <li><a href="#" onClick={() => scrollToSection('section2')}>Section 2</a></li>
                <li><a href="#" onClick={() => scrollToSection('section3')}>Section 3</a></li>
            </ul>
        </footer>
    );
};

Footer.propTypes = {
    section: PropTypes.string.isRequired,
};

export default Footer;