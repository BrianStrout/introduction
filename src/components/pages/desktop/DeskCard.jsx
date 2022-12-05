import React, { useState } from "react";
import "./Desk.css";
import DeskLinker from "./DeskLinker";
import OnScreenHook from "./OnScreenHook";

const DeskCard = (props) => {
  const [currentlyViewing, setCurrentlyViewing] = useState("intro");

  const introVisible = OnScreenHook(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    },
    props.introRef
  );
  const skillsVisible = OnScreenHook(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    },
    props.skillsRef
  );
  const portVisible = OnScreenHook(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    },
    props.portRef
  );
  const aboutVisible = OnScreenHook(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    },
    props.aboutRef
  );

  if (introVisible && currentlyViewing !== "intro") {
    setCurrentlyViewing("intro");
  }
  if (skillsVisible && currentlyViewing !== "skills") {
    setCurrentlyViewing("skills");
  }
  if (portVisible && currentlyViewing !== "port") {
    setCurrentlyViewing("port");
  }
  if (aboutVisible && currentlyViewing !== "about") {
    setCurrentlyViewing("about");
  }

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
        <DeskLinker currentlyViewing={currentlyViewing} />
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
          <button
            className="find_buttons"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/bstrout";
            }}
          >
            GitHub
          </button>

          <button
            className="find_buttons"
            type="button"
            onClick={(e) => {
              // e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/brian-strout-a11a8bb9/";
            }}
          >
            LinkedIn
          </button>

          <button
            className="find_buttons"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://www.strout.co";
            }}
          >
            www.Str
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeskCard;
