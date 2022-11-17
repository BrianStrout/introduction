import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
import {CgUserList, CgListTree, CgImage,CgProfile } from 'react-icons/cg'

const Linker = () => {
    let linkRef = useRef();
const [displayState, updateDisplayState] = useState("home");
let iconSize='30px';


useEffect(() => {
    let handler = (e) => {
      console.log("handler activated");
      if (!linkRef.current.contains(e.target)) {
        updateDisplayState("home");
        console.log("current state" + displayState);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div id='linker'
    ref={linkRef}>
        <div className="example">
    <div className="button-group"
    onClick={()=>{updateDisplayState("intro")}}
    >
        <div className="icon">
        <IconContext.Provider
      value={{ color: 'white', size: iconSize }}
    >
      <div>
      <CgUserList />
      </div>
    </IconContext.Provider>  
        </div>
        <div className="text">Intro</div>
    </div>
</div>
<div className="example">
    <div className="button-group"
     onClick={()=>{updateDisplayState("skill")}}
    >
        <div className="icon">
        <IconContext.Provider
      value={{ color: 'white', size: iconSize }}
    >
      <div>
      <CgListTree />
      </div>
    </IconContext.Provider>  
        </div>
        <div className="text">Skill</div>
    </div>
</div>
<div className="example">
    <div className="button-group"
     onClick={()=>{updateDisplayState("portfolio")}}
     >
        <div className="icon">
        <IconContext.Provider
      value={{ color: 'white', size: iconSize }}
    >
      <div>
      <CgImage />
      </div>
    </IconContext.Provider>  
        </div>
        <div className="text">Portf</div>
    </div>
</div>
<div className="example">
    <div className="button-group"
     onClick={()=>{updateDisplayState("about")}}
    >
        <div className="icon">
        <IconContext.Provider
      value={{ color: 'white', size: iconSize }}
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
  )
}

export default Linker