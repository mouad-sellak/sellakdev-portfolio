import React from 'react'
import './header.css'
import myCV from '../../assets/myCV.pdf'
import me from '../../assets/me.png'
import HeaderMedia from './HeaderMedia'
import { AiFillDownCircle } from "react-icons/ai";
function Header() {
  return (
    <header> 
      <div className="container header_container" >
        <h4>Hello I am</h4>
        <h1>Sellak Mouad</h1>
        <h4 className='text-light' > Future Software Engineer </h4>
        <h4 className='text-light' > Full Stack Developer </h4>
        <div className="buttons" >
          <a href={myCV} className="btn" download >Download CV</a>
          <a href="#contact" className="btn btn-primary" >Get In Touch</a>
        </div>
        <HeaderMedia />
        <div className="me" >
          <img src={me} alt="Sellak Mouad" />
        </div>
        <a href="#footer" className="scroll_down" ><AiFillDownCircle size={50} /></a>

      </div>
    </header>
  )
}

export default Header