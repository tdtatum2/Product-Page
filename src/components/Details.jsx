import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ReactComponent as CartIcon } from '../assets/images/icon-cart.svg';
import { ReactComponent as RemoveItem } from '../assets/images/icon-minus.svg';
import { ReactComponent as AddItem } from '../assets/images/icon-plus.svg';

import './Details.scss';

function Details({pendingItems, onCounterAdd, onCounterSub, onCartAdd}) {
  return (
    <Col xs={12} lg={6}>
        <section className="product_details">
            <h2 className="company_title">SNEAKER COMPANY</h2>
            <h1 className="product_title">Fall Limited Edition Sneakers</h1>
            <p className="product_description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they'll withstand everyting the weather can offer.
            </p>

            <Row className="pricing_section">
                <Col xs lg={7} xl={5}>
                    <h2 className="price">$125.00</h2>
                </Col>
                <Col xs>
                    <span className="discount">50%</span>
                </Col>
                <Col xs lg={12}>
                    <span className="old_price">$250.00</span>
                </Col>     
            </Row>

            <Row>
                <Col xs={12} lg={6} className='d-flex counter_control'>
                    <Col>
                        <button className="counter_control_button" onClick={onCounterSub}>
                            < RemoveItem />
                        </button>
                    </Col>
                    <Col>
                        <span className="counter_amount">{pendingItems}</span>
                    </Col>
                    <Col>
                        <button className="counter_control_button" onClick={onCounterAdd}>
                            < AddItem />
                        </button>
                    </Col>
                </Col>
                <Col xs={12} lg={6}>
                    <button type="button" onClick={onCartAdd} className="add_to_cart">
                        <span className="button_info">
                            < CartIcon />
                            <p>Add to cart</p>
                        </span>  
                    </button>
                </Col>
            </Row>
        </section>
    </Col>
  )
}

export default Details