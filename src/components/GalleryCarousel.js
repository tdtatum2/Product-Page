import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

import productImage1 from '../assets/images/image-product-1.jpg';
import productImage2 from '../assets/images/image-product-2.jpg';
import productImage3 from '../assets/images/image-product-3.jpg';
import productImage4 from '../assets/images/image-product-4.jpg';
import { ReactComponent as NextIcon } from '../assets/images/icon-next.svg';
import { ReactComponent as PrevIcon } from '../assets/images/icon-previous.svg';

function GalleryCarousel({index, setShow, handleSelect, controls}) {
  return (
    <Row className='carousel_row'>
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            interval={null}
            nextIcon={<div className="carousel-control-icon">< NextIcon /></div>}
            prevIcon={<div className="carousel-control-icon">< PrevIcon /></div>}
            controls={controls}
        >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={productImage1}
                alt="First slide"
                onClick={() => setShow(true)}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={productImage2}
                alt="Second slide"
                onClick={() => setShow(true)}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={productImage3}
                alt="Third slide"
                onClick={() => setShow(true)}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={productImage4}
                alt="Fourth slide"
                onClick={() => setShow(true)}
                />
            </Carousel.Item>
        </Carousel>
    </Row>
  )
}

export default GalleryCarousel