import React from "react";
import { CgFramer } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3, FaGithub, FaNodeJs } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import {
  SiMongodb,
  SiJavascript,
  SiAdobe,
  SiAbletonlive,
} from "react-icons/si";
import { GrDocumentVideo } from "react-icons/gr";
import { AiOutlineAim } from "react-icons/ai";

const Desk_PortfolioMasha = () => {
  return (
    <div>
      <h1>Fugi</h1>
      <ul className="test">
        <li>
          <FaHtml5 />
          Html
        </li>
        <li>
          <FaCss3 /> Css
        </li>
        <li>
          <SiJavascript /> Javscript
        </li>
        <li>
          <AiOutlineApi />
          GoogleSheets API
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
