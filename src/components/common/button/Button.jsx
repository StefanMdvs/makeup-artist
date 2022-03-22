import React from "react";
import { Link } from "react-router-dom";

import './Button.css'


const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--lg']

function Button ({children, type, btnStyle, btnSize}) {

  const checkBtnStyle = STYLES.includes(btnStyle) ? buttonStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]

  return (
    <Link to='/about'>
      <button 
      className={`btn${checkBtnStyle} ${checkBtnSize}`}
      type={type}
      >
        {children}
      </button>
    </Link>
  )
}


