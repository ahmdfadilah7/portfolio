import './ContentStyles.css'

import React from 'react'

function Content() {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder='Your Name'></input>
        <label>Your Email</label>
        <input type="email" placeholder='Your Email'></input>
        <label>Your Subject</label>
        <input type="text" placeholder='Your Subject'></input>
        <label>Your Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Content
