import React from "react";
import "./Desk.css";
import DeskLinker from "./DeskLinker";

const DeskCard = () => {
  return (
    <div className="desk_card">
      {/* <div className="desk_card_photo"> */}

      <div className="desk_card_title">
        <h2 className="brianjstrout">Brian J. Strout</h2>
        <span className="jobtitle"> Jr.Front-End Web Developer</span>
        <br />

        <span id="bctowna">Boston & Lisbon Based</span>
        <span id="bcemail">BrianJStrout@gmail.com</span>
        {/* <span id="bcnumber">+351 926 475 457</span> */}
      </div>

      <div className="desk_card_map">
        <DeskLinker />
      </div>

      <div className="founders">
        <div className="found_on_sentence">
          <span className="found_on">F</span>
          <span className="found_on">o</span>
          <span className="found_on">u</span>
          <span className="found_on">n</span>
          <span className="found_on">d </span>
          {/* <span className="found_on">" " </span> */}
          <span className="found_on">o</span>
          <span className="found_on">n</span>
        </div>
        <div className="foundersButBox">
          <button className="find_buttons">GitHub</button>
          <button className="find_buttons">LinkedIn</button>
          <button className="find_buttons">www.</button>
        </div>
      </div>
    </div>
  );
};

export default DeskCard;
