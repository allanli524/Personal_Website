import React from "react";
import Gallery from "./gallery.js";
import "./general.css";

const home = () => {
    return (
        <div>
            <h1 className="NameMe">Yifei Li</h1>
            <hr className="breakln"></hr>
            <h2 className="TitleMe">Aspiring Software Developer</h2>
            <Gallery></Gallery>
        </div>
    )
}

export default home;