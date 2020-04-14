import React from 'react';
import './index.css';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';


function Social() {
    return (
    <div id="wrapper">
          <div className="social_icons">
            <a href="https://m.facebook.com/altas.cars.3?ref=m_nux_wizard"><img src={facebook} alt="facebook icon"/></a>
            <a href="https://www.instagram.com/altascars/"><img src={instagram} alt="instagram icon"/></a>
            <a href="https://t.me/altascars"><img src={twitter} alt="twitter icon"/></a>
          </div>
          <p>altascars1@gmail.com</p>
      </div>
    );
  }
  
  export default Social;
