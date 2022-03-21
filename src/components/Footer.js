import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
            </div>
            <div>
                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
            </div>
            <div>
                <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
            </div>
            <div>
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
            </div>
        </div>
    )
}