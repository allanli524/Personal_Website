import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./general.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";

const home = () => {

    const CopyToBoard = () => {
        const msg = document.createElement("textarea")
        msg.textContent = "allanli524@gmail.com"
        msg.select()
        document.execCommand("copy")
        alert("Email has been copied to clipboard!")
    }
    return (
        <div className="HomeComponent">
            <p className="NameMe">Yifei Li</p>
            <hr className="breakln"></hr>
            <p className="TitleMe">Aspiring Software Developer</p>
            <hr className="breakln"></hr>
            <div className="contact">
                <FontAwesomeIcon className="social" icon={faGithub} size="5x" onClick={() => {window.open("https://github.com/allanli524", "_blank")}}/>
                <FontAwesomeIcon className="social" icon={faLinkedin} size="5x" onClick={() => {window.open("www.linkedin.com/in/yifeiallanli", "_blank")}}/>
                <FontAwesomeIcon className="social" icon={faFacebookSquare} size="5x" onClick={() => {window.open("https://www.facebook.com/allan.li.100", "_blank")}}/>
                <FontAwesomeIcon className="social" icon={faEnvelopeSquare} size="5x" onClick={CopyToBoard}/>
            </div>
            
        </div>
    )
}

export default home;