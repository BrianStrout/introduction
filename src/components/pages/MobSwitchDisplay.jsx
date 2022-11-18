import React from 'react'
import MobAbout from './MobAbout';
import MobHome from './MobHome';
import MobIntro from './MobIntro';
import MobPortfolio from './MobPortfolio';
import MobSkill from './MobSkill';


const MobSwitchDisplay = (props) => {
let tvSignal = (props.channel);

if(tvSignal === 'home') {
  return (<MobHome />);
} else if(tvSignal === 'intro') {
  return (<MobIntro />);
} else if(tvSignal === 'skill') {
  return (<MobSkill />);
} else if(tvSignal === 'portfolio') {
  return (<MobPortfolio />);
} else if(tvSignal === 'about') {
  return (<MobAbout />);
} else if(tvSignal === 'home') {
  return (<MobHome />);
}

};

export default MobSwitchDisplay