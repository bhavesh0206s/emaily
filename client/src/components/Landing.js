import React, { useState } from 'react';
import { useEffect } from 'react';
import {ReactComponent as Background1} from "../emaily_background1.svg"
import {ReactComponent as Background2} from "../emaily_background2.svg"
import './landing.css';

const Landing = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    setScreenWidth(w)
  }, [])
  return (
    <>
      {screenWidth > 600 && (
        <div style={{position: "absolute", left: 0, zIndex: "-1"}}>
          <Background1/>
        </div>
      )}
      <div style={{textAlign: 'center',fontFamily: "Poppins", color: "#2D2D2D", height: "2em"}}>
        <h1 className='landing__title'>Emaily!</h1>
        <h5 className='landing__sub-title'>
          Collect <span className='landing__feedback'>feedback</span> from your Users
        </h5> 
      </div>
      {screenWidth > 600 && (
        <div style={{position: "absolute", bottom: 0, right: 0, zIndex: "-1"}}>
          <Background2/>
        </div>
      )}
    </>
  );
}
 
export default Landing;