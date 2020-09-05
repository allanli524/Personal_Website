import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./general.css";

const Gallery = () => {
    return (
        <div className="carousel">
        <Carousel>
            <Carousel.Item>
                <img
                src="https://picsum.photos/500/300?img=1"
                alt="first slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://picsum.photos/500/300?img=1"
                alt="second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://picsum.photos/500/300?img=1"
                alt="third slide"/>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default Gallery;