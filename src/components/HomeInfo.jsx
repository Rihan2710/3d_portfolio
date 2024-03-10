//https://gist.github.com/adrianhajdin/7bc0603ee0b1bd2872b80a62c24b5e5f

import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent ={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Rihan</span>👋
            <br/>
            A Developer from India
        </h1>
    ),
    2:(
        <InfoBox
        text="Worked on many projects and picked up many skills along the way"
        link="/about"
        btnText="Learn More"/>
    ),
    3:(
        <InfoBox
        text="Led multiple projects to success. Curious about the impact?"
        link="/projects"
        btnText="Visit my portfolio"/>
    ),
    4:(
        <InfoBox
        text="Need help or looking for a dev? I'm just a few keystones away"
        link="/contact"
        btnText="Lets talk"/>
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
  
}

export default HomeInfo



