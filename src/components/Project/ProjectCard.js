import { NavLink } from "react-router-dom"
import "./ProjectCardStyles.css"

import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image" />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-detail">
            <p>{props.text}</p>
            <div className="project-btn">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.view} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
