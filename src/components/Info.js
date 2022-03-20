import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Info() {
    return (
        <header>
            <h1>Aidan Fournier</h1>
            <h4>Fullstack Developer</h4>
            <p>aidanfournier.com</p>
            <div className="info--links">
                <a className="ingo--mail" href="mailto:aidan.douglas.fournier@gmail.com"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email</a>
                <a href="https://www.linkedin.com/in/aidanfournier/">LinkedIn</a>
            </div>
        </header>
    )
}