import React, { useState, useRef } from 'react';
import '../src/styles.scss';

const Navbar = () => {
    const [highlightStyle, setHighlightStyle] = useState({});
    const navRef = useRef(null);
    const onHoverLink = (event) => {
        const linkRect = event.target.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setHighlightStyle({
        width: `${linkRect.width}px`,
        height: `${linkRect.height}px`,
        left: `${linkRect.left - navRect.left}px`,
        top: `${linkRect.top - navRect.top}px`,
        opacity: 1,
        borderRadius: '10px' 
    });
    };

return (
    <nav className="navbar" ref={navRef}>
        <ul className="nav-links">
        <li onMouseEnter={onHoverLink}>
            <a href="#aboutme">About Me</a>
        </li>
        <li onMouseEnter={onHoverLink}>
            <a href="#contact">Contact</a>
        </li>
        <li onMouseEnter={onHoverLink}>
            <a href="#blog">Blog</a>
        </li>
        </ul>
        <div className="highlight" style={highlightStyle}></div>
    </nav>
);
};

export default Navbar;