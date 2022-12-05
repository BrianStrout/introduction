import React from "react";
import { CgFramer } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiAdobe,
  SiAbletonlive,
} from "react-icons/si";
import { GrDocumentVideo } from "react-icons/gr";

const Desk_PortfolioMasha = () => {
  return (
    <div>
      <h1>Fugi</h1>
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
      {/* </div>
          <div className="portfolio_IMG_wrap">
            <div className="portfolio_IMG_wrap portfolio_IMG" alt="pIMG"></div>
          </div>
        </div> */}
      <p>
        As this site is meant to be used to display this young model's portfolio
        it was created with a focus on asthetic. It is coded in React v6 with
        Framer.Motion{" "}
      </p>
    </div>
  );
};

export default Desk_PortfolioMasha;
