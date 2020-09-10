import React from "react";
import "./general.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";

const education = () => {
    return (
        <div className="education_section">
            <div className="edu-main">
                <hr className="breakln1"></hr>
                <p className="education_title">Educational Background</p>
                <hr className="breakln1"></hr>
            </div>
            <p style={{color: "rgb(221, 219, 219)", fontSize: "2vw"}}>swipe down down for more . . .</p>
            <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid"}}></hr>
            <div className="edu-uoft">
                <Image style={{width: "20%", border: "0.5px black solid", height: "40%"}} src="uoft.png" />
                <div>
                    <p className="Edu-sec-title">University of Toronto - HBs</p>
                    <p className="Edu-sec-text">CGPA: 3.67</p>
                    <p className="Edu-sec-text"> I am currently in my second year of Undergraduates, graduating in 2023. I specialize in Bioinformatics & Computational Biology and Major in Cognitive Sciences.
                     On top of this I am also taking a variety of Computer Science courses.</p>
                </div>
            </div>
            <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid"}}></hr>
            <div className="edu-osa">
                <Image style={{width: "20%", border: "1px black solid", height: "40%"}} src="osa_handball_provs_logo_1.png"/>
                <div>
                    <p className="Edu-sec-title">Old Scona Academic High School - Diploma</p>
                    <p className="Edu-sec-text">I attended OSA from 2016 to 2019. My interest in programming started here in a casual Grade 11 computer science class.</p>
                </div>
            </div>
            <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid", marginBottom: "50%"}}></hr>
        </div>
    )
}

export default education;