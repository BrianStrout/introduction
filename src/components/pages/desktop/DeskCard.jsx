import React from 'react'
import './Desk.css'
import DeskLinker from './DeskLinker'

const DeskCard = () => {
  return (
    // <div className='desk_home'>
    // <div className='desk_container'>
    <div className='desk_card'>
    <div className='desk_card_photo'>
    <div className='desk_card_map'>
    <DeskLinker />
    </div>

    <div className='desk_card_title'>
    <h2>Brian J. Strout</h2>
    Junior Front-End Web Developer<br />
    <br />
    <div >

    </div>
  
    
    <span id='bctown'>Boston & Lisbon Based</span>
    <span id='bcemail'>BrianJStrout@gmail.com</span>
    <span id='bcnumber'>+351 926 475 457</span>
    </div>
    </div>
</div>
// </div>
// </div>

  )
}

export default DeskCard