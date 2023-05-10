import Row from 'react-bootstrap/Row';

import productThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import productThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import productThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import productThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';


function GalleryThumbnails({index, setIndex}) {
  return (
    <Row className='gallery_thumbnails'>
        <div className="thumbnail_holder">
            <div className={index === 0 ? 'active_thumbnail' : ''}>
                <img 
                src={productThumbnail1} 
                alt="Thumbnail preview of shoe"
                onClick={() => {setIndex(0)}}
                />
            </div>
            

            <div className={index === 1 ? 'active_thumbnail' : ''}>
                <img 
                src={productThumbnail2} 
                alt="Thumbnail preview of shoe"
                onClick={() => {setIndex(1)}}
                />
            </div>

            <div className={index === 2 ? 'active_thumbnail' : ''}>
                <img 
                src={productThumbnail3} 
                alt="Thumbnail preview of shoe"
                onClick={() => {setIndex(2)}}
                />
            </div>
            <div className={index === 3 ? 'active_thumbnail' : ''}>
                <img 
                src={productThumbnail4} 
                alt="Thumbnail preview of shoe"
                onClick={() => {setIndex(3)}}
                />
            </div>
        </div>
    </Row>
  )
}

export default GalleryThumbnails