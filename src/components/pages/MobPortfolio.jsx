import React from 'react';
import '../../App.css';
import './MobPortfolio.css';






const MobPortfolio = () => {
  return (
    <div className='Portfolio_Container'>
    <div className='Portfolio_Slide'>
    <h1>Masha</h1>
    <div className='portfolio_IMG_wrap'>
    <div className='portfolio_IMG_wrap portfolio_IMG' alt="pIMG"></div>
    </div>
    <p>As this site is meant to be used to display this young model's portfolio it was created with a focus on asthetic. 
    It is coded in React v6 with Framer.Motion </p>

    </div>
    <div className='Portfolio_Slide'>
    <h1>Fugitiva</h1>
    <div className='portfolio_IMG_wrap'>
    <div className='portfolio_IMG_wrap portfolio_IMG' alt="pIMG"></div>
    </div>
    <p>This site is coded in HTML and Javascript utilizes an API that dynamically pulls and sorts categories and menu items from a google drive sheet allowing the restraurant to easily update a mobile version of their menu items and their details. </p>

    </div>
    <div className='Portfolio_Slide'>
    <h1>React Shop</h1>
    <div className='portfolio_IMG_wrap'>
    <div className='portfolio_IMG_wrap portfolio_IMG' alt="pIMG"></div>
    </div>
    <p>Target design </p>

    </div>
</div>
  )
}

export default MobPortfolio