import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Form,

} from 'react-bootstrap';
import './cart.styles.css';

// -----
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import CheckBox from '../../components/check-box/check-box';
import SuitHeart from '../../assets/svgs/SuitHeart';
import TrashIcon from '../../assets/svgs/Trash';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import CartItems from './cart-items';

const Cart = () => {
  const [purchase, setPurchase] = useState([]);
  const items1 = JSON.parse(localStorage.getItem('purchases'));
  const {
   
    cartTotal,
    emptyCart,
    totalItems

  } = useCart();

  



  return (
    <Form className='container-cart container px-0 tr-vh-100  d-flex align-items-start justify-content-center  my-5'>
      <Row className='mx-0 my-3 w-100 h-100'>
        <Col className='h-75 px-0 px-lg-3'>
          <section className='bg-white rounded pl-3 pb-2 mb-3'>
            <small>
              <small className='font-weight-bold'>
                Preferred Delivery Option
              </small>
            </small>
            <Button
              variant='outline-success'
              className='d-flex align-items-baseline rounded p-2 col-8 col-md-4 mt-1 text-left'
            >
              <span>
                <CheckSquareIcon height={15} />
              </span>
              <div className='small ml-2'>
                <div className='font-weight-bold mb-1'>Rs. 99</div>
                <div className='small'>Standard</div>
                <div className='small'>Get by 12-13 Sep 2020</div>
              </div>
            </Button>
          </section>
          <section className='bg-white d-flex align-items-baseline justify-content-between p-2 rounded mb-3'>
            <span className='text-muted'>
              <CheckBox itemName='SELECT ALL (1 ITEM(S))' />
            </span>
            <Button className='p-0' variant='link' onClick={emptyCart}>
              <span className='mr-1'>
                <TrashIcon height={15} />
              </span>
              <small>DELETE</small>
            </Button>
          </section>
          <section className='bg-white rounded h-100 scrollbox'>
            <CartItems />
          </section>
        </Col>
        <Col lg={4} className='px-0 px-lg-3 mt-4 mt-lg-0'>
          <section className='bg-white rounded p-3'>
            <div className='mb-1 font-weight-bold'>Order Summary</div>
            <small className='d-flex justify-content-between px-1'>
              <span className='text-black-50'>Subtotal ({totalItems} items)</span>
              <span className='font-weight-bold'> {cartTotal} &#36;</span>
            </small>

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
              <span className='font-weight-bold text-success'> {cartTotal} &#36;</span>
            </small>

            <div className='mt-3'>
              <Button
                as={Link}
                to='/cart-checkout'
                variant='success'
                type='submit'
                block
              >
                <small>PROCEED TO CHECKOUT</small>
              </Button>
            </div>
          </section>

        </Col>
      </Row>
    </Form>
  );
};

export default Cart;