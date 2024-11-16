import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PageTransition.scss';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
    <>
    <motion.div
      className="page-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
    </>
  );
};

export default PageTransition;
