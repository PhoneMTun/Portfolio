import React, { useState, useEffect } from 'react';
import wallpaper from '../images/wallpaper.png';
import Navbar from '../components/navbar';
import Vignette from '../components/vignette';
import Character from '../components/character';
import Header from '../components/header';
import Wallpaer from '../components/wallpaer';
import './styles.scss';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, rotateDegree: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xValue = e.clientX - window.innerWidth / 2;
      const yValue = e.clientY - window.innerHeight / 2;
      const rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      setMousePosition({ x: xValue, y: yValue, rotateDegree });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Character mousePos={mousePosition} />
      <img mousePos={mousePosition}src={wallpaper} className="wallpaper" alt="Wallpaper" />
      <Wallpaper />
      <Vignette />
      <Navbar />
      <Header mousePos={mousePosition} />
    </>
  );
}

export default App;
