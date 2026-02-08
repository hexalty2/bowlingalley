// LandingPage.jsx
// Updated to remove the star badge and the text "Plaisir familial depuis 1985" from the hero section

import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="hero">
      <h1>Welcome to the Bowling Alley</h1>
      {/* Removed star badge and associated text */}
      <p>Experience fun and excitement in every frame!</p>
    </div>
  );
};

export default LandingPage;