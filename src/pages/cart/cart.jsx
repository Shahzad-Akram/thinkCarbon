import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import './cart.styles.css';

// -----
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import CheckBox from '../../components/check-box/check-box';
import SuitHeart from '../../assets/svgs/SuitHeart';
import TrashIcon from '../../assets/svgs/Trash';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);
  return (
    <Form className='container-cart container px-0 tr-vh-100 d-flex align-items-start justify-content-center  my-5'>
      <Row className='mx-0 my-3 w-100'>
        <Col>
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
            <Button className='p-0' variant='link'>
              <span className='mr-1'>
                <TrashIcon height={15} />
              </span>
              <small>DELETE</small>
            </Button>
          </section>
          <section className='bg-white rounded'>
            <Row className='mx-0 py-3 pl-2 pr-2 pr-md-4 border-bottom'>
              <Col md={6} className='d-flex px-0 order-0 order-md-first'>
                <span>
                  <CheckBox />
                </span>
                <Link to='/product-view' className='mx-2'>
                  <img
                    className='object-fit-contain'
                    height={80}
                    src='https://static-01.daraz.pk/p/f6a744878b530ad89586d090975aa153.png'
                    alt='phone'
                  />
                </Link>
                <div>
                  <Link to='/product-view' className='btn-link small'>
                    <div className='font-weight-bold'>
                      Huawei Y6p - 3GB Ram - 64GB Rom - 5000mAh Battery - 13MP
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
                <div className='text-success'>Rs. 20,897</div>
                <div className='text-line-through'>
                  <small>Rs. 22,000</small>
                </div>
                <div>
                  <small>-5%</small>
                </div>
                <span>
                  <Button className='p-0' variant='link'>
                    <span className='mr-2'>
                      <SuitHeart height={15} />
                    </span>
                  </Button>
                  <Button className='p-0' variant='link'>
                    <span>
                      <TrashIcon height={15} />
                    </span>
                  </Button>
                </span>
              </div>
              <div className='order-md-3 mt-2 mt-md-0 mb-0 small d-flex align-items-center align-self-baseline'>
                <Button
                  variant='light'
                  className='py-0 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount1(count1 - 1)}
                >
                  -
                </Button>
                <h6 className='mb-0 mx-3'> {count1} </h6>
                <Button
                  variant='light'
                  className='py-1 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount1(count1 + 1)}
                >
                  +
                </Button>
              </div>
            </Row>
            <Row className='mx-0 py-3 pl-2 pr-2 pr-md-4 border-bottom'>
              <Col md={6} className='d-flex px-0 order-0 order-md-first'>
                <span>
                  <CheckBox />
                </span>
                <Link to='/product-view' className='mx-2'>
                  <img
                    className='object-fit-contain'
                    height={80}
                    src='https://static-01.daraz.pk/p/f6a744878b530ad89586d090975aa153.png'
                    alt='phone'
                  />
                </Link>
                <div>
                  <Link to='/product-view' className='btn-link small'>
                    <div className='font-weight-bold'>
                      Huawei Y6p - 3GB Ram - 64GB Rom - 5000mAh Battery - 13MP
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
                <div className='text-success'>Rs. 20,897</div>
                <div className='text-line-through'>
                  <small>Rs. 22,000</small>
                </div>
                <div>
                  <small>-5%</small>
                </div>
                <span>
                  <Button className='p-0' variant='link'>
                    <span className='mr-2'>
                      <SuitHeart height={15} />
                    </span>
                  </Button>
                  <Button className='p-0' variant='link'>
                    <span>
                      <TrashIcon height={15} />
                    </span>
                  </Button>
                </span>
              </div>
              <div className='order-md-3 mt-2 mt-md-0 mb-0 small d-flex align-items-center align-self-baseline'>
                <Button
                  variant='light'
                  className='py-0 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount2(count2 - 1)}
                >
                  -
                </Button>
                <h6 className='mb-0 mx-3'> {count2} </h6>
                <Button
                  variant='light'
                  className='py-1 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount2(count2 + 1)}
                >
                  +
                </Button>
              </div>
            </Row>
            <Row className='mx-0 py-3 pl-2 pr-2 pr-md-4 border-bottom'>
              <Col md={6} className='d-flex px-0 order-0 order-md-first'>
                <span>
                  <CheckBox />
                </span>
                <Link to='/product-view' className='mx-2'>
                  <img
                    className='object-fit-contain'
                    height={80}
                    src='https://static-01.daraz.pk/p/f6a744878b530ad89586d090975aa153.png'
                    alt='phone'
                  />
                </Link>
                <div>
                  <Link to='/product-view' className='btn-link small'>
                    <div className='font-weight-bold'>
                      Huawei Y6p - 3GB Ram - 64GB Rom - 5000mAh Battery - 13MP
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
                <div className='text-success'>Rs. 20,897</div>
                <div className='text-line-through'>
                  <small>Rs. 22,000</small>
                </div>
                <div>
                  <small>-5%</small>
                </div>
                <span>
                  <Button className='p-0' variant='link'>
                    <span className='mr-2'>
                      <SuitHeart height={15} />
                    </span>
                  </Button>
                  <Button className='p-0' variant='link'>
                    <span>
                      <TrashIcon height={15} />
                    </span>
                  </Button>
                </span>
              </div>
              <div className='order-md-3 mt-2 mt-md-0 mb-0 small d-flex align-items-center align-self-baseline'>
                <Button
                  variant='light'
                  className='py-0 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount3(count3 - 1)}
                >
                  -
                </Button>
                <h6 className='mb-0 mx-3'> {count3} </h6>
                <Button
                  variant='light'
                  className='py-1 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount3(count3 + 1)}
                >
                  +
                </Button>
              </div>
            </Row>
            <Row className='mx-0 py-3 pl-2 pr-2 pr-md-4 border-bottom'>
              <Col md={6} className='d-flex px-0 order-0 order-md-first'>
                <span>
                  <CheckBox />
                </span>
                <Link to='/product-view' className='mx-2'>
                  <img
                    className='object-fit-contain'
                    height={80}
                    src='https://static-01.daraz.pk/p/f6a744878b530ad89586d090975aa153.png'
                    alt='phone'
                  />
                </Link>
                <div>
                  <Link to='/product-view' className='btn-link small'>
                    <div className='font-weight-bold'>
                      Huawei Y6p - 3GB Ram - 64GB Rom - 5000mAh Battery - 13MP
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
                <div className='text-success'>Rs. 20,897</div>
                <div className='text-line-through'>
                  <small>Rs. 22,000</small>
                </div>
                <div>
                  <small>-5%</small>
                </div>
                <span>
                  <Button className='p-0' variant='link'>
                    <span className='mr-2'>
                      <SuitHeart height={15} />
                    </span>
                  </Button>
                  <Button className='p-0' variant='link'>
                    <span>
                      <TrashIcon height={15} />
                    </span>
                  </Button>
                </span>
              </div>
              <div className='order-md-3 mt-2 mt-md-0 mb-0 small d-flex align-items-center align-self-baseline'>
                <Button
                  variant='light'
                  className='py-0 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount4(count4 - 1)}
                >
                  -
                </Button>
                <h6 className='mb-0 mx-3'> {count4} </h6>
                <Button
                  variant='light'
                  className='py-1 px-3 d-flex align-items-center justify-content-center product-btn-count'
                  onClick={() => setCount4(count4 + 1)}
                >
                  +
                </Button>
              </div>
            </Row>
          </section>
        </Col>
        <Col lg={4}>
          <section className='bg-white rounded p-3'>
            <div className='mb-1 font-weight-bold'>Order Summary</div>
            <small className='d-flex justify-content-between px-1'>
              <span className='text-black-50'>Subtotal (0 items)</span>
              <span className='font-weight-bold'>Rs. 0</span>
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
              <span className='font-weight-bold text-success'>Rs. 0</span>
            </small>

            <div className='mt-3'>
              <Button variant='success' type='submit' block>
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