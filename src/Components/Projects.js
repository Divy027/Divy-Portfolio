import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';
import Pro1 from "../images/AYKA.png"
import Pro2 from "../images/Project1.png";
import Pro3 from "../images/Project2.png";
import Pro4 from "../images/Project3.png";
import Pro5 from "../images/Project4.png";
import Pro6 from "../images/Project5.png";
import Pro7 from "../images/Project6.png";
import Pro8 from "../images/Project7.png";

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Experience</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Pro1} projectName="Project1" />
        <ProjectBox projectPhoto={Pro2} projectName="Project2" />
        <ProjectBox projectPhoto={Pro3} projectName="Project3" />
        <ProjectBox projectPhoto={Pro4} projectName="Project4" />
        <ProjectBox projectPhoto={Pro5} projectName="Project5" />
        <ProjectBox projectPhoto={Pro6} projectName="Project6" />
        <ProjectBox projectPhoto={Pro7} projectName="Project7" />
        <ProjectBox projectPhoto={Pro8} projectName="Project8" />
      </div>

    </div>
  )
}

export default Projects