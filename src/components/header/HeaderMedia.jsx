import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

import './header.css'
function HeaderMedia() {
  return (
    <div className="header_media" >
        <a href="https://www.linkedin.com/in/mouad-sellak/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mouad-sellak" target="_blank"><FaGithub/></a>
        <a href="https://www.fiverr.com/mouadsellak?up_rollout=true" target="_blank"><SiFiverr/></a>
        <a href="https://www.instagram.com/mouaadsellak/" target="_blank"><FaInstagramSquare/></a>
        <a href="https://www.facebook.com/mouad.sellak.7" target="_blank"><BsFacebook/></a>
        <a href="https://twitter.com/SellakMouad" target="_blank"><AiFillTwitterCircle size={26} /></a>
        
    </div>
  )
}
    
export default HeaderMedia