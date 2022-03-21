import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Profile from "../images/profile-pic.png"

export default function Info() {
    return (
        <header>
            <img src={Profile} className="info--profile" alt="Profile"/>
            <h1>Aidan Fournier</h1>
            <h4>Fullstack Developer</h4>
            <p>aidanfournier.com</p>
            <div className="info--links">
                <div className="info--mail">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <a href="mailto:aidan.douglas.fournier@gmail.com">Email</a>
                </div>
                <div className="info--linkedin">
                    <FontAwesomeIcon  icon={faLinkedin}></FontAwesomeIcon>
                    <a href="https://www.linkedin.com/in/aidanfournier/">LinkedIn</a>
                </div>
            </div>
        </header>
    )
}