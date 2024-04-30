import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode,SiTelegram} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Divy Prajapati</h4>
      <h4>Copyright &copy; 2024 DP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Divy027" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/divy-prajapati/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:divyprajapati027@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://t.me/Divy027" target="_blank"><SiTelegram/></a>
      </div>
    </footer>
  )
}

export default Footer