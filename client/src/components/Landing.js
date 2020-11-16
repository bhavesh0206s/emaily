import React, { useState } from 'react';
import { useEffect } from 'react';


const Landing = () => {

  return (
    <>
      <div style={{textAlign: 'center',fontFamily: "Poppins", color: "#2D2D2D", height: "2em", marginTop: '7em'}}>
        <h1 className='landing__title'>Emaily!</h1>
        <h5 className='landing__sub-title'>
          Collect <span className='landing__feedback'>feedback</span> from your Users
        </h5> 
      </div>
    </>
  );
}
 
export default Landing;