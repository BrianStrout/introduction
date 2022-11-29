import React from "react";
import "./Desk.css";
import { CgFramer } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiAdobe,
  SiAbletonlive,
} from "react-icons/si";
import { GrDocumentVideo } from "react-icons/gr";

const DeskSkills = () => {
  return (
    <div className="desk_container">
      <div className="dSkills dcontent">
        <h2>Skill Set</h2>
        <ul id="listed_skills">
          <h4>Front End</h4>
          <li>
            <FaHtml5 />
            HTML
          </li>
          <li>
            <FaCss3 />
            CSS
          </li>
          <li>
            <SiJavascript />
            JavaScript
          </li>
          <li>
            <FaReact />
            React
          </li>
          <li>
            <CgFramer /> Framer Motion
          </li>
          <h4>Back End</h4>
          <li>
            <FaGithub />
            Git
          </li>
          <li>Express?</li>
          <li>
            <SiMongodb />
            MongoDB
          </li>
          <li>
            <FaNodeJs /> Node.JS
          </li>
          <h4>MultiMedia</h4>
          <li>
            <SiAdobe />
            Adobe Premiere
          </li>

          <li>
            <GrDocumentVideo />
            Davinci Resolve
          </li>
          <li>
            <SiAbletonlive />
            Ableton Live
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeskSkills;
