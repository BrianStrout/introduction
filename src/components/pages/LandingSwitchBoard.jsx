import React from 'react'
import Desktop from './Desktop';
import Mobile from './Mobile'


const LandingSwitchBoard = (props) => {

const mobileDetect = props.isMobile;
console.log(mobileDetect);

  return (
    <div>
            {mobileDetect ? <Mobile /> : <Desktop />  }
    </div>
  )
}

export default LandingSwitchBoard