import React, { useState, useEffect } from 'react';
import characterImage from '../images/character.png'; // Path to your character image

const Character = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const xValue = (e.clientX - window.innerWidth / 2) / window.innerWidth * 2;
            const yValue = (e.clientY - window.innerHeight / 2) / window.innerHeight * 2;

            setMousePosition({ x: xValue, y: yValue });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const getTransformStyle = () => {
        const { x, y } = mousePosition;
        // Adjust these values based on how you want the character to move
        const rotation = `rotateY(${x * 5}deg) rotateX(${y * 5}deg)`;
        const translation = `translateX(${x * 10}px) translateY(${y * 10}px)`;

        return { transform: `${rotation} ${translation}` };
    };

    return (
        <img src={characterImage} style={getTransformStyle()} className="character" alt="character" />
    );
};

export default Character;
