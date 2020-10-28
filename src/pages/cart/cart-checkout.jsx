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
import CartItems from './cart-items';
import { useForm } from "react-hook-form";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from 'react-redux'



const CartCheckout = () => {
  const user = useSelector((state) => state.user);
  console.log(user)
  const stripe = useStripe()

  const {
    cartTotal,
    totalItems,
    items,
    emptyCart

  } = useCart();

  const [open, setOpen] = useState(false);
  const [loading, setIsLoading] = useState(false)
  const { handleSubmit, register, errors } = useForm();
  const elements = useElements();

  const onSubmit = async (data) => {
    setIsLoading(true)
    const {
      name,
      area,
      city,
      email,
      number,
      province,
      voucher,
      address,
      county
    } = data



    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
    if (!error) {
      const { id } = paymentMethod;

      try {
        const response = await axios.post('https://think-carbon-neutral-shop.herokuapp.com/order', {
          total: cartTotal, name, email, number, county, area,
          city, voucher, address, orderItem: items, stripeToken: id, orderBy : user.user._id
        }).then(
          emptyCart(),
          setIsLoading(false),
          toast.success('Purchase Successful', {
            autoClose: '1500',
          })
        ).catch(err => {
          setIsLoading(false);
          toast.danger('Purchase Successful', {
            autoClose: '1500',
          })
        })
      }
      catch (error) {
        console.log(error)

      }
    }

  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className='container-cart container px-0 d-flex align-items-start justify-content-center  my-5'>
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
                          name='name'
                          ref={register({ required: true, })}
                          placeholder='Enter your first and last name'
                        />
                        {errors.name && (
                          <p style={{ color: "red" }}>Oops. Name Required.</p>
                        )}

                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          name='number'
                          ref={register}
                          type='text'
                          placeholder='Please enter your phone number'
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          name='address'
                          ref={register({ required: true, })}
                          type='text'
                          placeholder='For Example: House# 123, Street# 123, ABC Road'
                        />
                        {errors.address && (<p style={{ color: "red" }}>Oops. Address Required.</p>)}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group>
                        <Form.Label>County</Form.Label>
                        <Form.Control
                          name='county'
                          ref={register({ required: true })}
                          type='text'
                          placeholder='For Example: House# 123, Street# 123, ABC Road'
                        />
                        {errors.county && (<p style={{ color: "red" }}>Oops. County Required.</p>)}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          name='city'
                          ref={register({ required: true })}
                          type='text'
                          placeholder='For Example: House# 123, Street# 123, ABC Road'
                        />
                        {errors.city && (<p style={{ color: "red" }}>Oops. City Required.</p>)}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                          name='area'
                          ref={register({ required: true })}
                          type='text'
                          placeholder='For Example: House# 123, Street# 123, ABC Road'
                        />
                      </Form.Group>
                      {errors.county && (<p style={{ color: "red" }}>Oops. City Required.</p>)}
                    </Col>
                  </Form.Row>

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
              <CartItems />

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
                  <Form.Control placeholder='Enter Voucher Code' name='voucher' ref={register} />
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


            </section>
            <section className='bg-white rounded p-3 mt-3'>
              <Form>
                <Form.Group>
                  <Form.Label className='small'>Email</Form.Label>
                  <Form.Control type='email' name='email' ref={register({ required: true })} />
                  {errors.email && (<p style={{ color: "red" }}>Oops. Email Required.</p>)}
                </Form.Group>
                <Form.Label className='small'>Card Information</Form.Label>
                <Form.Group className='mb-0' style={{ maxWidht: '400px', height: '33px', border: '1px solid #00000026', padding: '8px', borderRadius: '3px' }}>
                  <CardElement
                  />

                </Form.Group>



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
                <Button variant='success' block type='submit' disabled={loading === true ? true : false}>
                  <small className='font-weight-bold'>Pay &#36;{cartTotal}</small>
                </Button>
                <ToastContainer />
              </Form>
            </section>
          </Col>
        </Row>
      </Form>

    </>
  );
};

export default CartCheckout;