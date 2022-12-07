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
    <div className="d_port_slide_grid_case">
      <div className="d_port_slide_grid_header">
        <h1>Masha</h1>
      </div>
      <div className="d_port_slide_grid_list">
        <ul className="test">
          <span className="underline"> made with...</span>
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
      <div className="d_port_slide_grid_image">
        <div className="d_port_slide_grid_links">
          <button
            className="find_buttons"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/bstrout";
            }}
          >
            View Code
          </button>

          <button
            className="find_buttons"
            type="button"
            onClick={(e) => {
              // e.preventDefault();
              window.location.href = "https://www.netlify.com";
            }}
          >
            Live Preview
          </button>
        </div>
      </div>
      <div className="d_port_slide_grid_desc">
        <p>
          As this site is meant to be used to display this young model's
          portfolio it was created with a focus on asthetic. It is coded in
          React v6 with Framer.Motion{" "}
        </p>
      </div>
    </div>
  );
};

export default Desk_PortfolioMasha;
