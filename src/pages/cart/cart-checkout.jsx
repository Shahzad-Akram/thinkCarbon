import React, { useState } from 'react';
import { Row, Col, Button, Form, InputGroup, FormControl, Collapse } from 'react-bootstrap';
import './cart.styles.css';

// -----
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import CheckBox from '../../components/check-box/check-box';
import SuitHeart from '../../assets/svgs/SuitHeart';
import TrashIcon from '../../assets/svgs/Trash';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import ChevronDownIcon from '../../assets/svgs/ChevronDown';
import ChevronUpIcon from '../../assets/svgs/ChevronUp';

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

  const [open, setOpen] = useState(false);

  return (
    <>
      <Form className='container-cart container px-0 d-flex align-items-start justify-content-center  my-5'>
        <Row className='mx-0 my-3 w-100'>
          <Col>
            <section className='bg-white rounded px-4 py-2 mb-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <small className='font-weight-bold'>Delivery Information</small>
                <Button variant='link' className='p-0 mr-2' onClick={() => setOpen(!open)}
                  aria-controls='one'
                  aria-expanded={open}>

                  <span
                    className={
                      open
                        ? 'd-none'
                        : 'd-inline-block'
                    }
                  >
                    <ChevronDownIcon />
                  </span>
                  <span
                    className={
                      open
                        ? 'd-inline-block'
                        : 'd-none'
                    }
                  >
                    <ChevronUpIcon />
                  </span>
                </Button>
              </div>

              <Collapse className="position-static" in={open}>
                <div>
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
                  <div className='my-3'>
                    <Button variant='success' className='d-flex ml-auto px-5'>
                      <small className='font-weight-bold'>Save</small>
                    </Button>
                  </div>
                </div>
              </Collapse>

            </section>
            <section className='bg-light d-flex align-items-baseline justify-content-between p-2 rounded px-3 mb-3 small text-muted text-uppercase'>
              <small className='font-weight-bold'>1 ITEMS</small>
              <small className='font-weight-bold'>PRICE</small>
              <small className='font-weight-bold'>QUANTITY</small>
            </section>
            <section className='bg-white rounded vh-100 scrollbox'>
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
              </Row>)}

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
                  <small className='font-weight-bold'>  Proceed to Pay</small>
                </Button>
              </div>
            </section>
            <section className='bg-white rounded p-3 mt-3'>
              <Form>
                <Form.Group>
                  <Form.Label className='small'>Email</Form.Label>
                  <Form.Control type='email' />
                </Form.Group>
                <Form.Group className='mb-0'>
                  <Form.Label className='small'>Card information</Form.Label>
                  <InputGroup>
                    <FormControl
                      size='lg'
                      className='border-right-0 border-bottom-0 rounded-0'
                      placeholder='1234 1234 1234 1234'
                      type='number'
                    />
                    <InputGroup.Append>
                      <InputGroup.Text className='bg-white border-left-0 border-bottom-0 rounded-0'>
                        <img
                          height={22}
                          src='https://www.flaticon.com/svg/static/icons/svg/196/196578.svg'
                          alt='card'
                          className='mr-2'
                        />
                        <img
                          height={22}
                          src='https://www.flaticon.com/svg/static/icons/svg/196/196561.svg'
                          alt='card'
                          className='mr-2'
                        />
                        <img
                          height={22}
                          src='https://www.flaticon.com/svg/static/icons/svg/196/196565.svg'
                          alt='card'
                          className='mr-2'
                        />
                        <img
                          height={22}
                          src='https://www.flaticon.com/svg/static/icons/svg/196/196559.svg'
                          alt='card'
                        />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <Form.Row className='mb-3 mx-0'>
                  <Col className='px-0'>
                    <Form.Control
                      className='rounded-0 border-right-0'
                      placeholder='MM / YY'
                      type='date'
                    />
                  </Col>
                  <Col className='px-0'>
                    <InputGroup>
                      <Form.Control
                        className='rounded-0 border-right-0'
                        placeholder='CVC'
                        type='number'
                      />
                      <InputGroup.Append>
                        <InputGroup.Text className='bg-white border-left-0 rounded-0'>
                          <img
                            height={18}
                            src='https://www.flaticon.com/svg/static/icons/svg/2922/2922999.svg'
                            alt='card'
                          />
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Group>
                  <Form.Label className='small'>Name on card</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group>
                  <Form.Label className='small'>Country or region</Form.Label>
                  <Form.Control as='select' className='pl-1'>
                    <option value='0'>Pakistan</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </Form.Control>
                </Form.Group>
                <Button variant='success' block type='submit'>
                  <small className='font-weight-bold'>Pay $20.00</small>
                </Button>
              </Form>
            </section>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CartCheckout;