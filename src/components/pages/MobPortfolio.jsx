import React from "react";
import "../../App.css";
import "./MobPortfolio.css";
import { CgFramer } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";

const MobPortfolio = () => {
  return (
    <div className="Portfolio_Container">
      <div className="Portfolio_Slide">
        <div className="slideTop">
          <div className="Slide_Title">
            <h1>Masha</h1>
            <ul className="test">
              <li>
                <FaReact />
                React
              </li>
              <li>
                <FaCss3 /> Css
              </li>
              <li>
                <CgFramer />
                Framer Motion
              </li>
            </ul>
          </div>
          <div className="portfolio_IMG_wrap">
            <div className="portfolio_IMG_wrap portfolio_IMG" alt="pIMG"></div>
          </div>
        </div>
        <p>
          As this site is meant to be used to display this young model's
          portfolio it was created with a focus on asthetic. It is coded in
          React v6 with Framer.Motion{" "}
        </p>
      </div>

      <div className="Portfolio_Slide">
        <div className="slideTop">
          <div className="Slide_Title">
            <h1>Fugitiva</h1>
            <ul className="test">
              <li>
                <FaHtml5 />
                React
              </li>
              <li>
                <FaCss3 /> Css
              </li>
              <li>
                <AiOutlineApi />
                GoogleSheets API
              </li>
            </ul>
          </div>
          <div className="portfolio_IMG_wrap">
            <div className="portfolio_IMG_wrap portfolio_IMG" alt="pIMG"></div>
          </div>
        </div>
        <p>
          This site is coded in HTML and Javascript utilizes an API that
          dynamically pulls and sorts categories and menu items from a google
          drive sheet allowing the restraurant to easily update a mobile version
          of their menu items and their details.
        </p>
      </div>

      <div className="Portfolio_Slide">
        <div className="slideTop">
          <div className="Slide_Title">
            <h1>React Store</h1>
            <ul className="test">
              <li>
                <FaHtml5 />
                React
              </li>
              <li>
                <FaCss3 /> Css
              </li>
              <li>
                <AiOutlineApi />
                product API
              </li>
              <li>
                <SiMongodb /> backend software
              </li>
            </ul>
          </div>
          <div className="portfolio_IMG_wrap">
            <div className="portfolio_IMG_wrap portfolio_IMG" alt="pIMG"></div>
          </div>
        </div>
        <p>
          Using the styling pattern for Target, this React coded store allows
          for clients to log in and save items to a wish list, or shop freely to
          their account.
        </p>
      </div>

      {/* 
    <div className='Portfolio_Slide'>
    <h1>React Shop</h1>
    <div className='portfolio_IMG_wrap'>
    <div className='portfolio_IMG_wrap portfolio_IMG' alt="pIMG"></div>
    </div>
    <p>Target design </p> */}
    </div>
  );
};

export default MobPortfolio;
