import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Project1Desc : "This is a staking DApp designed for the Basepunk NFT collection on BaseChain. In addition to developing the staking contract with custom reward logic and integrating it into the frontend, I have also created the UI for this project.",
    Project1Website : "https://stake.basepunk.xyz/",

    Project2Desc : "This is a migration portal for 4DOTHq. I have developed a smart contract that facilitates migration for a limited time period, along with integrating it into the frontend and creating the frontend UI.",
    Project2Website : "https://www.4dot.io/",

    Project3Desc:"This is a dApp designed for migrating ASAP Sniper bot v1 tokens to v2 tokens. In addition to developing the smart contract, I have integrated it into the frontend using Wagmi and implemented the WalletConnect model for Web3 connection.",
    Project3Website:"https://www.asapbot.xyz/",
    
    Project4Desc:"This is the BitBrawl airdrop platform. I integrated the Twitter API, implemented mission and referral logic, and addressed several bugs. Furthermore, as a part of team we have enhanced various functionalities in both the frontend and backend to meet the client's requirements.",
    Project4Website:"https://airdrop.bitbrawl.io/",

    Project5Desc:"This is the BasedHub TokenLaunchpad by 2x Solutions. I developed this dApp to enable users to create custom ERC20 tokens, conduct airdrops, and create liquidity pools directly from the frontend. I designed the smart contract to automate these processes for the user, simplifying token creation and management.",
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