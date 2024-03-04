import "./HeroImageStyles.css"

import React from 'react'

import IntroImg from "../../assets/coding-bg.jpg";
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm a Ahmad Fadilah</p>
        <h1>Web Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
