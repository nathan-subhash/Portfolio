import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/Social.css'
import {
    faGithub,
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


 export default function Social() {
    return (
        <div className='footer'>
            <a href="https://github.com/nathan-subhash"
            className="github social"  target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/nathan-jarvis/"
            className="linkedin social" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/nathan__jarvis/"
            className="instagram social"target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            
        </div>
    )
}
