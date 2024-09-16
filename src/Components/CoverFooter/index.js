import React from 'react'
import AppStore from "../../assets/App Store.png";
import GoogleStore from "../../assets/Google Play.png";
import Twitch from "../../assets/Twitch.png";
import Twitter from "../../assets/Twitter.png";
import Instagram from "../../assets/instagram.png";


import "./style.css";

const CoverFooter = () => {
  return (
    <footer className='coverFooter'>
        <div className='footer'>
            <div className='downloadIcon'>
                <img src={AppStore} alt='footer' />
                <img src={GoogleStore} alt='footer'/>
            </div>
            <div className='socialMsg'>
                <p className='socialMessage'>
                    Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </p>
                <div class='iconWrapper'>
                    
                <img src={Twitch} alt='twitch icon'/>
                <img src={Twitter} alt='twitter icon' />
                <img src={Instagram} alt='instagram icon'/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default CoverFooter