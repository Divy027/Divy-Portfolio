import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Melvin from '../images/melvin.jpg';
import {CiCoffeeCup, CiDumbbell} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>DIVY PRAJAPATI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a DAAP or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>Solidity</b> and know a bit of <b>Rust</b> and am working on a few 
            projects in the <b>MERN</b> stack.<br />
            I plan to learn <b>Solana development</b> and <b>Next.js</b> in the near future. <br /><br />
            Also, I love <b>gym</b>  <CiDumbbell style={{scale:"1.5", rotate:"10deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Melvin} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home