import React from 'react';
import NavBar from '../NavBar';
import "./style.css";
import CoverPage from '../CoverPage';
import CoverFooter from '../CoverFooter';

const MainLayer = () => {
  return (
    <div className='main'>
        <div className='children'>
        <NavBar/>
        <CoverPage/>
        <CoverFooter/>
        </div>
    </div>
  )
}

export default MainLayer