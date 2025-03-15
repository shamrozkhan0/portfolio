import React, { useState, useEffect } from 'react';
import '../assets/components-style/Scroll.css';

const Scroll = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll progress as a percentage
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;

      // Set the line height based on the scroll progress
      setLineHeight(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='position-fixed scroll'
      style={{
        width: `${lineHeight}%`,
      }}
    />
  );
};

export default Scroll;