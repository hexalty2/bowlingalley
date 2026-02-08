import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <section>
      <h1>Welcome to Our Bowling Alley!</h1>
      <p>Experience fun and excitement for the whole family!</p>
      <motion.div animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Other content of LandingPage */}
      </motion.div>
    </section>
  );
};

export default LandingPage;