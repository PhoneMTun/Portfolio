import React from 'react';
import wallpaper from '../images/wallpaper.png';

const Wallpaper = ({ mousePos }) => {
  const transformStyle = {
    transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px) 
                rotateY(${mousePos.rotateDegree}deg)`
  };

  return <img src={characterImage} style={transformStyle} className="character" alt="character" />;
};

export default Wallpaepr;
