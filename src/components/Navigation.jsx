import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import thumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/images/icon-delete.svg';
import sneakersLogo from '../assets/images/logo.svg';
import { ReactComponent as CartIcon } from '../assets/images/icon-cart.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import profileIcon from '../assets/images/image-avatar.png';
import closeIcon from '../assets/images/icon-close.svg';

import './Navigation.scss';

function Navigation({cartItems, onCartDelete}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const cartFunction = () => {
    if(showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };


  return (
    <Navbar expand="lg">
      <Container fluid>
        <div className="navigation-grid">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleShow}>
            <img src={menuIcon} alt="Expand Navigation Menu Icon" />
          </Navbar.Toggle>
          <Navbar.Brand href="#">
            <img src={sneakersLogo} alt="sneakers Logo" />
          </Navbar.Brand>
          
          <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
          show={show}
          onHide={handleClose}
          >
          <Offcanvas.Header>
            <button aria-label='Close'><img src={closeIcon} alt="Close" onClick={handleClose} /></button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3">
              <Nav.Link href="#">Collections</Nav.Link>
              <Nav.Link href="#">Men</Nav.Link>
              <Nav.Link href="#">Women</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

          <Nav.Link href="#">
            < CartIcon id={showCart ? 'cart-icon' : ''} onClick={cartFunction} className='cart_desktop'/>
            <div className={cartItems > 0 ? "cart_item_number" : "hide_number"}>
              <p>{cartItems}</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#"><img src={profileIcon} alt="User Profile Icon" id="profile-icon"/></Nav.Link>
        </div>
        
        
        
      </Container>

      <Modal show={showCart} onHide={handleCloseCart} dialogClassName="cart_modal" size='sm' backdrop={true} backdropClassName='nav-backdrop'>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { cartItems > 0 ?
          <div className="cart">
            <Row className='item_cart_info'>
              <Col xs={3}>
                <img src={thumbnail} alt="Item Thumbnail" className='cart_product_thumbnail' />
              </Col>
              
              <Col>
                <Row>
                  <p className='cart_item_title'>
                    Fall Limited Edition Sneakers
                  </p>
                </Row>
                <Row>
                    <p className='cart_item_description'>
                      $125.00 x {cartItems} <span>${cartItems * 125}.00</span>
                    </p>
                </Row>
              </Col>
                
              <Col xs={1}>
                <button onClick={onCartDelete} className='delete_cart_items'>
                  <img src={deleteIcon} alt="Trash Can Icon" />
                </button>
              </Col>
            </Row>            
            <Row>
              <Col>
                <button className='cart_checkout_button'>
                  Checkout
                </button>
              </Col>
            </Row>
          </div>
          :
          <div className="cart">
            <p className='empty_cart'>Your cart is empty.</p>
          </div>  
        }
        </Modal.Body>
      </Modal>
    </Navbar>
  )
}

export default Navigation