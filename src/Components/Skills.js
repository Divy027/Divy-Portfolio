import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHardHat} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel, SiTypescript, SiSolidity, SiEthereum, SiWeb3Dotjs, SiTailwindcss, SiRust} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Etherium: <SiEthereum/>,
        Web3: <SiWeb3Dotjs/>,
        Hardhat: <FaHardHat/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Typescript: <SiTypescript/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        Tailwind : <SiTailwindcss/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Vercel : <SiVercel/>,
        Solidity : <SiSolidity/>,
        Rust : <SiRust/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
