import { Link } from "react-router-dom"
import "./ContentStyles.css"

import React from 'react'
import pro1 from '../../assets/Project-1.png'
import pro2 from '../../assets/Project-2.png'

function Content() {
  return (
    <div className="about">
      <div className="about-left">
        <h1>Who Am I?</h1>
        <p>I am a web developer. My name is Ahmad Fadilah. I have been working in the web development field for the last 3 years. Throughout my career, I have gained extensive experience in front-end and back-end development, as well as proficiency in various programming languages and frameworks. I have a strong passion for creating user-friendly and visually appealing websites and web applications.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="about-right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={pro1} className="img" alt="image"></img>
            </div>
            <div className="img-stack bottom">
                <img src={pro2} className="img" alt="image"></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Content
