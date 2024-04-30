import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Project1Desc : "This is a staking DApp tailored for the Basepunk NFT collection on BaseChain. I crafted a sophisticated staking contract with custom reward mechanisms, seamlessly integrated it into the frontend, and meticulously designed the user interface to enhance user experience and engagement.",
    Project1Website : "https://stake.basepunk.xyz/",

    Project2Desc : "This is the 4DOTHq Migration Portal, designed to streamline token migration within a limited timeframe. I developed a robust smart contract for secure and efficient migration, seamlessly integrated it into the frontend, and optimized Migration data storage using MongoDB Atlas for enhanced performance.",
    Project2Website : "https://www.4dot.io/",

    Project3Desc:"This dApp streamlines the migration process from ASAP Sniper bot v1 tokens to v2 tokens. I engineered the smart contract and seamlessly integrated it into the frontend using Wagmi. To ensure smooth Web3 connection, I implemented the WalletConnect model.",
    Project3Website:"https://www.asapbot.xyz/",
    
    Project4Desc:"This is the BitBrawl airdrop platform. I integrated the Twitter API, implemented mission and referral logic, and addressed several bugs. Furthermore, as a part of team we have enhanced various functionalities in both the frontend and backend to meet the client's requirements.",
    Project4Website:"https://airdrop.bitbrawl.io/",

    Project5Desc:"This is the BasedHub TokenLaunchpad. It empowers users to effortlessly deploy custom ERC20 tokens across multiple blockchains. With a focus on user convenience, I engineered the smart contract to automate token deployment, airdrops, and liquidity pool creation directly from the frontend, streamlining the token creation and management process..",
    Project5Website:"https://token-launchpad-fe.vercel.app/launchpad",

    Project6Desc:"This is the Telegram Stars Arena Sniper Bot, designed to enable users to automatically snipe keys of Star Arena users directly from Telegram.",

    Project7Desc: "This is the Jew Coin website on BaseChain, featuring a comprehensive suite of functionalities. I've developed an ERC20 token, implemented a staking smart contract, and curated an NFT collection. Additionally, I've integrated metadata for enhanced token representation and utility.",
    Project7Website: "https://jewcoin.io/"



  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Website</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox