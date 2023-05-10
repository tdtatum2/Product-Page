import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import GalleryThumbnails from './GalleryThumbnails';
import GalleryCarousel from './GalleryCarousel';

import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg';


import './Gallery.scss';


function Gallery() {

    // MAIN GALLERY FUNCTIONS AND VARIABLES
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const handleIndexChange = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    
    // MODAL FUNCTIONS AND VARIABLES
    const [modalIndex, setModalIndex] = useState(0);

    
    const handleModalSelect = (selectedIndex, e) => {
        setModalIndex(selectedIndex);
    }

    const handleModalIndexChange = (selectedIndex) => {
        setModalIndex(selectedIndex);
    }


    // OPENING MODAL FUNCTION
    const handleModalOpen = () => {
        if(largeScreen) {
            setShow(true);
        }
    }

    const handleModalClose = () => {
        console.log("Hello");
        setShow(false);
    }

    // MONITORING SCREEN SIZE TO DETERMINE CONTROL DISPLAY
    const [largeScreen, setLargeScreen] = useState(window.innerWidth > 991);

    useEffect(() => {
        const handleResize = () => {
          setLargeScreen(window.innerWidth > 991);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
        <Col xs={12} lg={6}>
            <section className="gallery">
                
                    < GalleryCarousel
                        index={index}
                        setShow={handleModalOpen}
                        handleSelect={handleSelect}
                        controls={!largeScreen}
                    />
                

                < GalleryThumbnails
                    index={index}
                    setIndex={handleIndexChange}
                />
                
            </section>
            <Modal
                size="lg"
                show={show}
                backdrop={true}
                backdropClassName='gallery_modal_backdrop'
                onHide={() => setShow(false)}
                className='gallery_modal'
                centered
                >
                <div className="modal-header">
                    <button onClick={handleModalClose}>
                        < CloseIcon />
                    </button>
                </div>
                    
                
                < GalleryCarousel
                        index={modalIndex}
                        setShow={handleModalOpen}
                        handleSelect={handleModalSelect}
                        controls={true}
                    />
                < GalleryThumbnails
                    index={modalIndex}
                    setIndex={handleModalIndexChange}
                />
            </Modal>

        </Col>
  )
}

export default Gallery