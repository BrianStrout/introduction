import React from "react";
import { useRef, useState } from "react";
import { IconContext } from "react-icons";
import { CgUserList, CgListTree, CgImage, CgProfile } from "react-icons/cg";

const DeskLinker = (props) => {
  let deskLinkRef = useRef();
  let deskIconSize = "40px";
  const currentlyViewing = props.currentlyViewing;
  const [iconMatch, updateIconMatch] = useState(<CgUserList />);

  if (currentlyViewing === "intro" && iconMatch.type.name !== "CgUserList") {
    updateIconMatch(<CgUserList />);
  }
  if (currentlyViewing === "skills" && iconMatch.type.name !== "CgListTree") {
    updateIconMatch(<CgListTree />);
  }
  if (currentlyViewing === "port" && iconMatch.type.name !== "CgImage") {
    updateIconMatch(<CgImage />);
  }
  if (currentlyViewing === "about" && iconMatch.type.name !== "CgProfile") {
    updateIconMatch(<CgProfile />);
  }

  return (
    <div className="mapicon" ref={deskLinkRef}>
      {/* <div className="icon"> */}
      <IconContext.Provider value={{ color: "black", size: deskIconSize }}>
        <div className="icon_disp">{iconMatch}</div>
      </IconContext.Provider>
    </div>
  );
};

export default DeskLinker;
