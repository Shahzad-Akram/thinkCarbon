import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import './cart.styles.css';

// -----
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import CheckBox from '../../components/check-box/check-box';
import SuitHeart from '../../assets/svgs/SuitHeart';
import TrashIcon from '../../assets/svgs/Trash';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const [purchase, setPurchase] = useState([]);
  const items1 = JSON.parse(localStorage.getItem('purchases'));
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  useEffect(() => {
    setPurchase(items1);
  }, []);

  const handleDelete = (e) => {
    setPurchase(purchase.slice(purchase.indexOf(e.target, 1)));
    localStorage.setItem('purchase', purchase);
    console.log(purchase, localStorage);
  };

  return (
    <Form className='container-cart container px-0 tr-vh-100 scrollbox d-flex align-items-start justify-content-center  my-5'>
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
            {isEmpty ? (
              <p>Cart is Empty</p>
            ) : (
              items.map((purchase) => (
                <Row className='mx-0 py-3 pl-2 pr-2 pr-md-4 border-bottom'>
                  <Col md={6} className='d-flex px-0 order-0 order-md-first'>
                    <span>
                      <CheckBox />
                    </span>
                    <Link to='/product-view' className='mx-2'>
                      <img
                        className='object-fit-contain'
                        width={80}
                        height={80}
                        src={purchase.images}
                        alt='phone'
                      />
                    </Link>
                    <div>
                      <Link to='/product-view' className='btn-link small'>
                        <div className='font-weight-bold'>
                          {purchase.name} - 3GB Ram - 64GB Rom - 5000mAh Battery
                          - 13MP Triple Camera
                        </div>
                        <div>
                          Huawei, Storage Capacity:64GB, Color Family:GREEN
                        </div>
                      </Link>
                      <div className='small'>
                        {purchase.quantity === purchase.stockQuantity ? (
                          <span className='text-danger font-weight-bold text-capitalize'>
                            out of stock
                          </span>
                        ) : (
                          <small>
                            Only {purchase.stockQuantity - purchase.quantity}{' '}
                            item(s) in stock
                          </small>
                        )}
                      </div>
                    </div>
                  </Col>
                  <div className='order-first order-md-2 col-9 col-md-auto px-0 justify-content-between mr-auto mx-md-auto mb-2 mb-md-0 d-flex flex-md-column'>
                    <div className='text-success'>Rs. {purchase.price}</div>
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
                      <Button
                        className='p-0'
                        variant='link'
                        onClick={() => removeItem(purchase._id)}
                      >
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
                      onClick={() =>
                        updateItemQuantity(purchase._id, purchase.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <h6 className='mb-0 mx-3'> {purchase.quantity} </h6>
                    <Button
                      variant='light'
                      disabled={
                        purchase.quantity === purchase.stockQuantity
                          ? true
                          : false
                      }
                      className='py-1 px-3 d-flex align-items-center justify-content-center product-btn-count'
                      onClick={() =>
                        updateItemQuantity(purchase._id, purchase.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                </Row>
              ))
            )}
          </section>
        </Col>
        <Col lg={4} className='px-0 px-lg-3 mt-4 mt-lg-0'>
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
                <small>Pay $20.00</small>
              </Button>
            </Form>
          </section>
        </Col>
      </Row>
    </Form>
  );
};

export default Cart;
