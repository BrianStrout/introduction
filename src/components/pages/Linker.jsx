import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
import {CgUserList, CgListTree, CgImage,CgProfile } from 'react-icons/cg'

// const FancyButton = React.forwardRef(

const Linker = (props) => {
    let linkRef = useRef();
// const [displayState, updateDisplayState] = useState("home");

console.log(props)

const clicker =props.setChannel;
// props.setChannel(displayState);

const updateDisplayState=(chan) =>{
clicker(chan)
}

let iconSize='30px';



 

  return (


    <div id='linker'
    ref={linkRef}
    >
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