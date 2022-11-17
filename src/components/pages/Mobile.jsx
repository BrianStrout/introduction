import React from 'react';
import '../../App.css';
import './Mobile.css';
import MobSwitchDisplay from './MobSwitchDisplay';
import Linker from './Linker';







const eraser = () =>{

    document.getElementById("my_name").classList.add("hidden");
}



const ShakeHands = () => {

    // document.getElementById("my_name").classList.remove('intro_face');
    document.getElementById("mobile_landing_top").classList.remove('intro_face');
    document.getElementById("mobile_landing_top").classList.add('mob_subcontainer');
    // document.getElementById("mobile_landing_bot").classList.remove('hidden');
    document.getElementById("mobile_landing_bot").classList.add('mob_subcontainer');
    document.getElementById("my_name").classList.add("clicked");

    setTimeout(eraser, 2100);

}




const Mobile = () => {



    // useEffect(() => {
    //     const handleResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    //   });
    //   return <span>Window width {width}</span>;
    // }






let strangers = true;

  return (
    <div className='container'>
    <div className='mobile_landing_container'>
    <div className='intro_face'  id="mobile_landing_top"
    onClick={ ()=> strangers ?  ShakeHands() : null}
    >










        


    <Linker />
    </div>
    <div className='my_name'id='my_name_span' ><span id='my_name'><h2>BrianJ.Strout</h2></span></div>
    <div className=''  id="mobile_landing_bot">
    <MobSwitchDisplay />
{/* <p style={{color: "white"}}>hi</p> */}
</div>
</div>
    </div>
  )
}

export default Mobile