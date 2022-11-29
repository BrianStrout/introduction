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
        <div className="foundOn">
          <span id="found_on">Found on</span>
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
