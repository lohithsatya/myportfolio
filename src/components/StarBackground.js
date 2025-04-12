import React, { useEffect } from 'react';

const StarBackground = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      
      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      
      // Random animation duration between 3s and 6s
      const duration = Math.random() * 3 + 3;
      star.style.animationDuration = duration + 's';
      
      document.getElementById('star-container').appendChild(star);
      
      // Remove star after animation
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    // Create initial stars
    for (let i = 0; i < 20; i++) {
      createStar();
    }

    // Create new stars periodically
    const interval = setInterval(() => {
      createStar();
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="star-container"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default StarBackground; 