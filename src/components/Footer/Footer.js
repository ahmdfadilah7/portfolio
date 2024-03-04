import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
            <div className="address">
                <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                <div>
                    <p>Kp. Pulekan RT 01/02</p>
                    <p>Kabupaten Bogor</p>
                    <p>Indonesia</p>
                </div>
            </div>
            <div className="phone">
                <Link to="https://wa.me/+628989505373" target="_blank">
                    <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +62 898 9505 373
                    </h4>
                </Link>
            </div>
            <div className="email">
                <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=ahmdfadilah7@gmail.com" target="_blank">
                    <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> ahmdfadilah7@gmail.com
                    </h4>
                </Link>
            </div>
        </div>
        <div className="footer-right">
            <h4>About Me</h4>
            <p>I am a web developer. My name is Ahmad Fadilah. I have been working in the web development field for the last 3 years.</p>
            <div className="social">
                <Link to="https://www.linkedin.com/in/ahmad-fadilah-0b983b244/" target="_blank">
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </Link>
                <Link to="https://www.instagram.com/fadilah1077/" target="_blank">
                    <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </Link>
                <Link to="https://wa.me/+62899505373" target="_blank">
                    <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
