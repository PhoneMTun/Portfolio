import React from 'react';
import headerImage from '../images/header.svg';

const Header = ({ mousePos }) => {
  const transformStyle = {
    transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px) 
                rotateY(${mousePos.rotateDegree}deg)`
  };

  return <img src={headerImage} style={transformStyle} className="header" alt="header" />;
};

export default Header;
