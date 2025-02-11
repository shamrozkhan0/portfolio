import React, { useState, useEffect } from 'react';

const VerticalScroll = () => {
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
    <div
      style={{
        position: 'fixed', // Fixed position relative to the viewport
        top: 0,
        left: '0px',
        transform: 'translateX(-50%)',
        width: `${lineHeight * 2}%`,
        height: `5px`,
        backgroundColor: 'white',
        zIndex: 1000,
      }}
    />
  );
};

export default VerticalScroll;