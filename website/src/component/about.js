import React from "react";
import Gallery from "./gallery.js";
import "./general.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";

const about = () => {
    return (
        <div className="about_body">
            <Gallery></Gallery>
            <hr></hr>
            <p style={{fontSize:"8vw", textAlign:"center"}}>A little about myself . . .</p>
            <div className="selfintro">
                <p className="about_myself">"In order to be not replaced by robots, you must learn how to program them. I hear that a lot myself, however, the reason
                I am pursuing computer sciences is because of the joy from problem-solving and overall being in control of what I am doing." </p>
                <div>
                    <Image src='myself.jpg' className="pic"/>
                    <Image src='myselfcopy.jpg' className="pic"/>
                </div>
            </div>
            <div className="selfintrop2">
                <hr></hr>
                <p style={{fontSize:"8vw", textAlign:"center"}}>A little more about myself . . .</p>
                <hr></hr>
                <div className="pic2">
                    <Image style={{border: "solid 2px black"}} src="shooting.jpg" roundedCircle/>
                    <p className="interests" style={{position: "absolute", top: "5%", left: "40%", backgroundColor: "black", color: "white"}}>Basketball</p>
                    <p className="interests" style={{position: "absolute", top: "26%", left: "10%", backgroundColor: "black", color: "white"}}>Violin</p>
                    <p className="interests" style={{position: "absolute", top: "26%", right: "10%", backgroundColor: "black", color: "white"}}>Anime</p>
                    <p className="interests" style={{position: "absolute", bottom: "16%", left: "12%", backgroundColor: "black", color: "white"}}>Gaming</p>
                    <p className="interests" style={{position: "absolute", bottom: "16%", right: "12%", backgroundColor: "black", color: "white"}}> Handball</p>
                </div>
            </div>
        </div>
    )
}

export default about;