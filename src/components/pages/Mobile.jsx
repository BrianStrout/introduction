import React from 'react';
import '../../App.css';
import './Mobile.css';



const ShakeHands = () => {

    // document.getElementById("my_name").classList.remove('intro_face');
    document.getElementById("mobile_landing_top").classList.remove('intro_face');
    document.getElementById("mobile_landing_top").classList.add('mob_subcontainer');
    document.getElementById("mobile_landing_bot").classList.add('mob_subcontainer');
    document.getElementById("my_name").classList.add("clicked");
    // document.getElementById("mobile_landing_bot").classList.remove('hidden');
}




const Mobile = () => {

let strangers = true;







  return (
    <div className='container'>
    <div className='mobile_landing_container'>


{/* mob_subcontainer */}
    <div className='intro_face'  id="mobile_landing_top"
    onClick={ ()=> strangers ?  ShakeHands() : null}
    >top
    hi hello
    </div>
    <div className='my_name'id='my_name_span' ><span id='my_name'><h2>BrianJ.Strout</h2></span></div>
    <div className=''  id="mobile_landing_bot">bottom

</div>
</div>
    </div>
  )
}

export default Mobile