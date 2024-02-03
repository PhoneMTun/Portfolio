import React, { useState, useRef } from 'react';
import '../src/styles.scss';
import vig from '../images/vignette.svg';

const Vignette =() => {
    return(
        <>
            <img src={vig}  className="vignette-bottom" alt="vignette" />
            <img src={vig}  className="vignette-top" alt="vignette" />
        </>
    )
}
export default Vignette