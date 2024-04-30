import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Divy Prajapati</b> and I am from Mumbai, India.
            I'm a <b>Blockchain Developer</b> and a final year college student pursuing <b>Bachelor's In Computer Application</b>. <br/><br/>
            I have done an internship as a <b>Blockchain Developer</b> at 2x solution which is a Web3 startup.
            Along with open souce contribution for Pyth Protocol, I have also worked as a freelancer for multiple clients, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill="Solidity"/>
        <Skills skill="Web3"/>
        <Skills skill="Hardhat"/>
        <Skills skill="Etherium"/>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Typescript' />
        <Skills skill='MongoDb' />
        <Skills skill='Tailwind' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Rust'/>
        
      </div>

      <div className="SkillContainer">
        <p> Blockchain <span className="BracketText">(EVM)</span></p>
        <div className="SkillLevel">
          <div className="SkillLevelBar" style={{ width: "99%" }}></div>
        </div>
        <br/>
        <p>
           Smart Contracts <br/>
          <span className="BracketText">(ERC20, ERC721, Staking, Bridge, CCIP,Zeta Omni Contracts)</span>
        </p>
        <div className="SkillLevel">
          <div className="SkillLevelBar" style={{ width: "99%" }}></div>
        </div>
        <br/>

        <p> Web3 Integration<br/>
        <span className="BracketText">(Web3.js, Ethers.js, Wagmi)</span>
         </p>
        <div className="SkillLevel">
          <div className="SkillLevelBar" style={{ width: "99%" }}></div>
        </div>
        <br/>

        <p> Frontend<br/>
        <span className="BracketText">(React.js, Tailwind CSS)</span>
         </p>
        <div className="SkillLevel">
          <div className="SkillLevelBar" style={{ width: "80%" }}></div>
        </div>
        <br/>

        <p> Backend<br/>
        <span className="BracketText">(MongoDb, Node.js, Express.js)</span>
         </p>
        <div className="SkillLevel">
          <div className="SkillLevelBar" style={{ width: "70%" }}></div>
        </div>
        <br/>

        <p> Telegram Bot<br/>
        <span className="BracketText">(Telegraf.js)</span>
         </p>
        <div className="SkillLevel">
          <div className="SkillLevelBar" style={{ width: "90%" }}></div>
        </div>
        <br/>
        <p> Dex LP<br/>
        <span className="BracketText">(Pair creation, adding liquidity, locking liquidity, querying data from router)</span>
         </p>
        <div className="SkillLevel">
          <div className="SkillLevelBar" style={{ width: "99%" }}></div>
        </div>
    </div>
    </>
  )
}

export default About