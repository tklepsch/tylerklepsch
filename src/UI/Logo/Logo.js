import React from 'react';
import { NavLink } from 'react-router-dom';

const logo = () => {
  return (
    <div className="Logo">
      <NavLink
        to='/'
        exact>
        <svg style={{position: 'relative', zIndex: '101'}}width="111" height="65" viewBox="0 0 111 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="55.8122" height="65" fill="white"/>
          <rect x="55.8123" width="54.7592" height="65" fill="#0B5D70"/>
          <path d="M40.0163 19.4725H29.0742V48H24.6085V19.4725H13.6898V16H40.0163V19.4725Z" fill="#0B5D70"/>
          <path d="M82.0935 33.1209L78.0624 37.1868V48H73.7143V16H78.0624V31.8242L92.7147 16H97.9687L84.9922 30.1319L98.9878 48H93.7791L82.0935 33.1209Z" fill="white"/>
        </svg>          
      </NavLink>

    </div>
  );
}

export default logo;