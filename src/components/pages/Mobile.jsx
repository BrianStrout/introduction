import React, { useState,useEffect, useRef } from 'react';
import '../../App.css';
import './Mobile.css';
import MobSwitchDisplay from './MobSwitchDisplay';
import Linker from './Linker';

const eraser = () =>{
    document.getElementById("my_name").classList.add("hidden");
}

const ShakeHands = () => {
    document.getElementById("mobile_landing_top").classList.remove('intro_face');
    document.getElementById("mobile_landing_top").classList.add('mob_subcontainer');
    document.getElementById("mobile_landing_bot").classList.add('mob_subcontainer');
    document.getElementById("my_name").classList.add("clicked");
    document.getElementById("linker").classList.add('pushin');
    setTimeout(eraser, 2100);
}

const Mobile = () => {
const [channel, setChannel]= useState("home")
let strangers = true;
const [adHeight, upDateAdHeight] = useState("50vh");
const [adHeightZ, upDateAdHeightZ] = useState("90%");
const [adjusted, updateAdjusted] = useState(false);

useEffect(() => {
  let blankClickHandler = (e) => {
    if (e.target.id ==='mobile_landing_top') {
      setChannel("home");
    }
  };  
  document.addEventListener("mousedown", blankClickHandler);
  return () => {
    document.removeEventListener("mousedown", blankClickHandler);
  };
});

useEffect(() => {
if(channel === "portfolio"){
upDateAdHeight("30vh")
upDateAdHeightZ("60%");
updateAdjusted(true);
document.getElementById("mobile_landing_bot").classList.add('mob_subcontainer_bumped');
}else{
  upDateAdHeight("50vh")
  upDateAdHeightZ("90%");
  updateAdjusted(false);
  document.getElementById("mobile_landing_bot").classList.remove('mob_subcontainer_bumped');
}
}, [channel]);




  return (
    <div className='container'>
    <div className='mobile_landing_container'>
    <div className='intro_face'  id="mobile_landing_top"
    style={{"height" : adHeight, backgroundSize: adHeightZ}}
    onClick={ ()=> strangers ?  ShakeHands() : null}
    >
    <Linker 
    setChannel = {setChannel}
    />
    </div>
    <div className='my_name'id='my_name_span' >
    <span id='my_name'><h2>BrianJ.Strout</h2></span>
    </div>
    <div className=''  id="mobile_landing_bot">
    <MobSwitchDisplay channel = {channel} />
</div>
</div>
</div>
  )
}

export default Mobile