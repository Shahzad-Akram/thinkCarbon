import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import './cart.styles.css';

// -----
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import CheckBox from '../../components/check-box/check-box';
import SuitHeart from '../../assets/svgs/SuitHeart';
import TrashIcon from '../../assets/svgs/Trash';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const CartCheckout = () => {
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems 

  } = useCart();
 

  return (
    <Form className='container-cart container px-0 tr-vh-100 d-flex align-items-start justify-content-center  my-5'>
      <Row className='mx-0 my-3 w-100'>
        <Col>
          <section className='bg-white rounded px-4 py-2 mb-3'>
            <small className='font-weight-bold'>Delivery Information</small>

            <Form.Row className='flex-column flex-md-row small mx-0 mt-3'>
              <Col className='mr-4'>
                <Form.Group>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your first and last name'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Please enter your phone number'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='For Example: House# 123, Street# 123, ABC Road'
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    as='select'
                    defaultValue='Please choose your province'
                    custom
                  >
                    <option disabled>Please choose your province</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    as='select'
                    defaultValue='Please choose your city'
                    custom
                  >
                    <option disabled>Please choose your city</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    as='select'
                    defaultValue='Please choose your area'
                    custom
                  >
                    <option disabled>Please choose your area</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <div className='text-right my-3'>
              <Button className='btn-success px-5'>Save</Button>
            </div>
          </section>
          <section className='bg-light d-flex align-items-baseline justify-content-between p-2 rounded px-3 mb-3 small text-muted text-uppercase'>
            <small className='font-weight-bold'>1 ITEMS</small>
            <small className='font-weight-bold'>PRICE</small>
            <small className='font-weight-bold'>QUANTITY</small>
          </section>
          <section className='bg-white rounded'>
            <div className='bg-light d-flex justify-content-between p-2 small'>
              <span className='font-weight-bold'>Package 1 of 1</span>
              <span className='d-flex align-items-center'>
                <small className='mr-2'>Shipped by</small>
                <span className='font-weight-bold'>Zenith Enterprise</span>
              </span>
            </div>
            <div className='px-3 my-2'>
              <small>
                <small className='font-weight-bold'>Delivery Option</small>
              </small>
              <Button
                variant='outline-success'
                className='d-flex align-items-baseline rounded p-2 col-8 col-md-4 mt-1 text-left'
              >
                <span>
                  <CheckSquareIcon height={15} />
                </span>
                <div className='small ml-2'>
                  <div className='font-weight-bold mb-1'>
                    <span>Free</span>
                    <small className='ml-2 text-line-through'>Rs. 99</small>
                  </div>
                  <div className='small'>Home Delivery</div>
                  <div className='small'>Est. Arrival: 15-17 Sep</div>
                </div>
              </Button>
            </div>
            {items.map(purchase => <Row className='mx-0 py-3 pl-2 pr-2 pr-md-4 border-bottom'>
              <Col md={6} className='d-flex px-0 order-0 order-md-first'>
                <Link to='/product-view' className='mx-2'>
                  <img
                    className='object-fit-contain'
                    height={50}
                    src={purchase.images}
                    alt='phone'
                  />
                </Link>
                <div>
                  <Link to='/product-view' className='btn-link small'>
                    <div className='font-weight-bold'>
                     {purchase.name} - 3GB Ram - 64GB Rom - 5000mAh Battery - 13MP
                      Triple Camera
                    </div>
                    <div>Huawei, Storage Capacity:64GB, Color Family:GREEN</div>
                  </Link>
                  <div className='small'>
                    <small>Only 1 item(s) in stock</small>
                  </div>
                </div>
              </Col>
              <div className='order-first order-md-2 col-9 col-md-auto px-0 justify-content-between mr-auto mx-md-auto mb-2 mb-md-0 d-flex flex-md-column'>
                <div className='text-success'>{purchase.price}</div>
                <div className='text-line-through'>
                  <small>Rs. 22,000</small>
                </div>
                <div>
                  <small>-5%</small>  
                </div>
                <span>
                  <Button className='p-0' variant='link'>
                    <span>
                      <TrashIcon height={15} />
                    </span>
                  </Button>
                </span>
              </div>
              <div className='order-md-3 mt-2 mt-md-0 mb-0 small d-flex align-items-center align-self-baseline'>
                Qty: {purchase.quantity}
              </div>
            </Row> )}
            
          </section>
        </Col>
        <Col lg={4}>
          <section className='bg-white rounded p-3'>
            <div className='mb-1 font-weight-bold'>Order Summary</div>
            <div className='d-flex justify-content-between px-1 small mb-2'>
              <span className='text-black-50'>Subtotal ({totalItems} items)</span>
              <span className='font-weight-bold'>{cartTotal} &#36;</span>
            </div>

            <div className='d-flex justify-content-between px-1 small mb-2'>
              <span className='text-black-50'>Shipping Fee</span>
              <span className='font-weight-bold'>Rs. 119</span>
            </div>

            <div className='d-flex justify-content-between px-1 small mb-2'>
              <span className='text-black-50'>Shipping Fee Discount</span>
              <span className='font-weight-bold'>-Rs. 119</span>
            </div>

            <Row className='mx-0 my-2'>
              <Col className='px-0'>
                <Form.Control placeholder='Enter Voucher Code' />
              </Col>
              <Col xs={5} md={4} className=' pr-0'>
                <Button variant='success' type='submit' block className='py-1'>
                  <small>APPLY</small>
                </Button>
              </Col>
            </Row>

            <small className='d-flex justify-content-between px-1'>
              <span>Total</span>
              <span className='font-weight-bold text-success'>{cartTotal} &#36;</span>
            </small>

            <div className='mt-3'>
              <Button variant='success' type='submit' block>
                Proceed to Pay
              </Button>
            </div>
          </section>
        </Col>
      </Row>
    </Form>
  );
};

export default CartCheckout;
