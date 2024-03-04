import { Link } from "react-router-dom"
import "./PricingCardStyles.css"

import React from 'react'

function PricingCard() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>- BASIC -</h3>
            <span className="bar"></span>
            <p className="price">800rb</p>
            <p>- 14 Days -</p>
            <p>- 4 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">ORDER NOW</Link>
        </div>

        <div className="card">
            <h3>- PREMIUM -</h3>
            <span className="bar"></span>
            <p className="price">800rb</p>
            <p>- 7 Days -</p>
            <p>- 4 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">ORDER NOW</Link>
        </div>

        <div className="card">
            <h3>- BUSINESS -</h3>
            <span className="bar"></span>
            <p className="price">800rb</p>
            <p>- 5 Days -</p>
            <p>- 8 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">ORDER NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
