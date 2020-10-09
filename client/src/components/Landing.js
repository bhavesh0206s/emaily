import React from 'react';
import {ReactComponent as Background1} from "../emaily_background1.svg"
import {ReactComponent as Background2} from "../emaily_background2.svg"

const Landing = () => {
  return (
    <>
      <div style={{position: "absolute", left: 0, zIndex: "-1"}}>
        <Background1/>
      </div>
    <div style={{textAlign: 'center',fontFamily: "Poppins", color: "#2D2D2D", height: "2em"}}>
      <h1>Emily!</h1>
      <h5>
       Collect feedback from your Users
      </h5> 
    </div>
    <div style={{position: "absolute", bottom: 0, right: 0, zIndex: "-1"}}>
        <Background2/>
      </div>
    </>
  );
}
 
export default Landing;