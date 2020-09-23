import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./general.css";

const Gallery = () => {
    return (
        <div className="carousel">
        <Carousel>
            <Carousel.Item>
                <img className="carousel-img"
                src="about3.jpeg"
                alt="first slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img"
                src="about4.jpg"
                alt="second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img"
                src="about2.jpg"
                alt="third slide"/>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default Gallery;