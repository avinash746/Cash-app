import React from 'react';
import introCube from "../../assets/intro-cube.svg";
import introPhone from "../../assets/intro-phone.svg";
import introPiller from "../../assets/intro-pillar.png";
import introCubeLarge from "../../assets/intro-cube-large.png";
import introStairs from "../../assets/intro-stairs.png";
import "./style.css";

const CoverPage = () => {
  return (
    <div id="coverpage">
       <div className='boxLayer1'>
         <img className='introCube1' src={introCube}></img>
        <img className='introLadder' src={introStairs}></img>
       </div>

        <div className='centerDiv'>
            <h1 className='centerTextCash centerText'>CASH</h1>
            <img className='introPhone' src={introPhone}></img>
            <h1 className='centerTextApp centerText'>APP</h1>
        </div>
        <div className='boxLayer2'>
          <img className='cubeImg' src={introCubeLarge}></img>
          <img className='pillerImg' src={introPiller}></img>
        </div>
        

    </div>
  )
}

export default CoverPage