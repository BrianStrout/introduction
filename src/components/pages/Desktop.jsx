import React from 'react';
import DeskAbout from './desktop/DeskAbout';
import DeskCard from './desktop/DeskCard';
import DeskIntro from './desktop/DeskIntro';
import DeskPortfolio from './desktop/DeskPortfolio';
import DeskSkills from './desktop/DeskSkill';
import './desktop/Desk.css';


const Desktop = () => {
  return (
    <div className='desk_home'>

    <DeskCard />
    <DeskIntro />
    <DeskSkills />
    <DeskPortfolio />
    <DeskAbout />
    
  
    




    </div>

  )
}

export default Desktop