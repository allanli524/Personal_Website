import React from "react";
import Gallery from "./gallery.js";
import "./general.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";

const about = () => {
    return (
        <div>
        <div className="about-carousel-container">
            <Gallery/>
        </div>
        <div className="about_body">
            <p style={{color: "rgb(221, 219, 219)", fontSize: "2vw", textAlign:"center"}}>scroll down down for more . . .</p>
            <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid"}}></hr>
            <hr></hr>
            <div className="about-sec1">
                <p className="about-sec-title" style={{textAlign:"center", margin:"10% 0 10% 0"}}>A little about myself . . .</p>
                <hr style={{width: "80%", border: "1px rgb(221, 219, 219) solid"}}></hr>
                <div className="selfintro">
                    <p className="about_myself">"In order to be not replaced by robots, you must learn how to program them. I hear that a lot myself, however, the reason
                    I am pursuing computer sciences is because of the joy from problem-solving and overall being in control of what I am doing." </p>
                    <hr style={{width: "80%", border: "1px rgb(221, 219, 219) solid"}}></hr>
                    <div>
                        <Image src='myself.jpg' className="pic"/>
                        <Image src='myselfcopy.jpg' className="pic"/>
                    </div>
                    <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid", marginTop: "20%"}}></hr>
                </div>
            </div>
            <div className="selfintrop2">
                <hr></hr>
                <p className="about-sec-title" style={{textAlign:"center", width: "80%"}}>A little more interesting</p>
                <p className="about-sec-title" style={{textAlign:"center"}}>. . .</p>
                <hr></hr>
                <hr style={{width: "80%", border: "1px rgb(221, 219, 219) solid"}}></hr>
                <div className="pic2">
                    <Image style={{border: "solid 2px black"}} src="shooting.jpg" roundedCircle/>
                    <p className="interests" style={{position: "absolute", top: "5%", left: "40%", backgroundColor: "black", color: "white"}}>Basketball</p>
                    <p className="interests" style={{position: "absolute", top: "26%", left: "10%", backgroundColor: "black", color: "white"}}>Violin</p>
                    <p className="interests" style={{position: "absolute", top: "26%", right: "10%", backgroundColor: "black", color: "white"}}>Anime</p>
                    <p className="interests" style={{position: "absolute", bottom: "16%", left: "12%", backgroundColor: "black", color: "white"}}>Gaming</p>
                    <p className="interests" style={{position: "absolute", bottom: "16%", right: "12%", backgroundColor: "black", color: "white"}}> Handball</p>
                </div>
                <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid", marginBottom: "20%"}}></hr>
            </div>
        </div>
        </div>
    )
}

export default about;