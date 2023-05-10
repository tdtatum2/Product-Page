import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


import productThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import productThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import productThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import productThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';

import productImage1 from '../assets/images/image-product-1.jpg';
import productImage2 from '../assets/images/image-product-2.jpg';
import productImage3 from '../assets/images/image-product-3.jpg';
import productImage4 from '../assets/images/image-product-4.jpg';

import nextIcon from '../assets/images/icon-next.svg';
import prevIcon from '../assets/images/icon-previous.svg';


import './Gallery.scss';


function Gallery() {

    const [index, setIndex] = useState(0);

    

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    
    return (
        <Col xs={12}>
            <section className="gallery">
                
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    indicators={false}
                    interval={null}
                    nextIcon={<div className="carousel-control-icon"><img src={nextIcon} alt='Next Icon'/></div>}
                    prevIcon={<div className="carousel-control-icon"><img src={prevIcon} alt='Previous Icon'/></div>}
                >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={productImage1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={productImage2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={productImage3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={productImage4}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            
        </Col>
  )
}

export default Gallery