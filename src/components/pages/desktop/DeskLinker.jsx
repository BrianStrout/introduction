import React from "react";
import { useRef, useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { CgUserList, CgListTree, CgImage, CgProfile } from "react-icons/cg";

const DeskLinker = (props) => {
  let deskLinkRef = useRef();
  const clicker = props.setChannel;
  const updateDeskDisplayState = (chan) => {
    clicker(chan);
  };

  let deskIconSize = "30px";

  return (
    <div ref={deskLinkRef}>
      <div className="desk_link_tab">
        <div
          className="button-group"
          onClick={() => {
            updateDeskDisplayState("intro");
          }}
        >
          <div className="icon">
            <IconContext.Provider
              value={{ color: "white", size: deskIconSize }}
            >
              <div>
                <CgUserList />
              </div>
            </IconContext.Provider>
          </div>
          <div className="text">Intro</div>
        </div>
      </div>

      <div className="desk_link_tab">
        <div
          className="button-group"
          onClick={() => {
            updateDeskDisplayState("skill");
          }}
        >
          <div className="icon">
            <IconContext.Provider
              value={{ color: "white", size: deskIconSize }}
            >
              <div>
                <CgListTree />
              </div>
            </IconContext.Provider>
          </div>

          <div className="text">Skill</div>
        </div>
      </div>
      <div className="desk_link_tab">
        <div
          className="button-group"
          onClick={() => {
            updateDeskDisplayState("portfolio");
          }}
        >
          <div className="icon">
            <IconContext.Provider
              value={{ color: "white", size: deskIconSize }}
            >
              <div>
                <CgImage />
              </div>
            </IconContext.Provider>
          </div>
          <div className="text">Portf</div>
        </div>
      </div>
      <div className="desk_link_tab">
        <div
          className="button-group"
          onClick={() => {
            updateDeskDisplayState("about");
          }}
        >
          <div className="icon">
            <IconContext.Provider
              value={{ color: "white", size: deskIconSize }}
            >
              <div>
                <CgProfile />
              </div>
            </IconContext.Provider>
          </div>
          <div className="text">About</div>
        </div>
      </div>
    </div>
  );
};

export default DeskLinker;
