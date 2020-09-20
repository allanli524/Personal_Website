import React from "react";
import "./general.css";
import Image from "react-bootstrap/Image";

const experience = () => {
    return (
        <div className="experience">
            <div className="exp_title">
                <hr className="breakln1"></hr>
                <p className="exp_title_text">Work and Coding Experiences</p>
                <hr className="breakln1"></hr>
            </div>
            <p style={{color: "rgb(221, 219, 219)", fontSize: "2vw"}}>swipe down down for more . . .</p>
            <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid"}}></hr>
            <div className="exp_sec1">
                <div style={{width: "95%"}}>
                <Image className="exp_logo"src="logo.jpg"/>
                <p className="exp_sectitle">Contract Software Developer (Internship)</p>
                <p className="exp_sectext"> May 2020 - Present</p>
                <p className="exp_sectext">  Neuhaus Development is a Start-up company aimed at streamlining the speed and efficiency of
                    Real Estate trading services by introducing automatic property default risk calculation
                    with machine learning algorithms. I have most of my time here as a front-end web developer. Throughout this
                    experience I learned and worked with React.JS, Express, React-Bootstrap, and other front-end dependencies to create
                    various web modules. 
                </p>
                </div>
                <div style={{textAlign: "center"}}>
                    <p className="exp_img_text">* main page of default risk website *</p>
                    <Image style={{margin: "0 0 10% 0", width: "95%"}}src="NEUHAUS.png"/>
                </div>
            </div>
            <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid"}}></hr>
            <div className="exp_sec3">
                <p className="exp_sectitle">Cattle Farm Indoor Tracking System</p>
                <p className="exp_sectext">May 2020 - Present</p>
                <p className="exp_sectext"> 
                    The Cattle Industry is a billion dollar business abundant all over the world,
                    our goal of this project is to introduce a more efficient method of cattle caretaking
                    with an indoor tracking system based on Bluetooth Light Energy (BLE) technologies. 
                    My contribution to this project was building the data transfer interface between the BLE 
                    beacons and the central server. Throughout this experience I constructed Python Socket Servers and worked with 
                    Arduino programming language to synchronize M5StickC/ESP32 modules to the server to periodically update BLE beacon data.
                </p>
                <div style={{textAlign: "center"}}>
                    <p className="exp_img_text">*JSON location data recieved from BLE beacons via M5StickC*</p>
                    <Image style={{marginBottom: "10%", width: "95%"}}src="JSONdataexample.png"/>
                </div>
            </div>
            <hr style={{width: "100%", border: "1px rgb(221, 219, 219) solid"}}></hr>
            <div className="exp_sec3">
                <p className="exp_sectitle">Java Client Trading & Meetup Program</p>
                <p className="exp_sectext">June - September 2020</p>
                    <p className="exp_sectext">CSC 207 (Java programming and Clean Architecture Class - UofT</p>
                <p className="exp_sectext"> This is the first extensive Java project I have worked on. Along with six other group members, we 
                constructed this trading and meetup graphic interface with over 60 classes. We followed principles of Clean Architecture and 
                we implemented various design patterns such as the Iterator and Factory pattern to improve the efficiency of this application. 
                Although we did not publish this project on any platforms, this experience has taught me how to build a multilayer application.
                </p>
                <div style={{textAlign: "center"}}>
                    <p className="exp_img_text">* graphic user interface of trading project, made with java swing *</p>
                    <Image style={{width: "50%", marginBottom: "5%"}} src="tradeapp.png"/>
                </div>
                
            </div>
            <hr className="edu_divider"></hr>
        </div>
    )
}

export default experience;