import React from "react";
import { useRef } from "react";
import DeskAbout from "./desktop/DeskAbout";
import DeskCard from "./desktop/DeskCard";
import DeskIntro from "./desktop/DeskIntro";
import DeskPortfolio from "./desktop/DeskPortfolio";
import DeskSkills from "./desktop/DeskSkill";
import DeskPortSlide from "./desktop/DeskPortSlide";
import "./desktop/Desk.css";
import Tune from "./desktop/Tune";

const Desktop = () => {
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const portRef = useRef(null);
  const aboutRef = useRef(null);

  // const isVisible = OnScreenHook(
  //   {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.6,
  //   },
  //   targetRef
  // );
  // console.log(isVisible, "is visy");
  return (
    <div className="desk_home">
      <DeskCard
        introRef={introRef}
        skillsRef={skillsRef}
        portRef={portRef}
        aboutRef={aboutRef}
      />

      <div ref={introRef} className="scroll_click">
        <DeskIntro />
      </div>

      <div ref={skillsRef} className="scroll_click">
        <DeskSkills />
      </div>

      <div ref={portRef} className="scroll_click">
        <DeskPortfolio />
      </div>

      <div ref={aboutRef} className="scroll_click">
        <DeskAbout />
      </div>
      <div className="scroll_click">
        <Tune />
      </div>
    </div>
  );
};

export default Desktop;
