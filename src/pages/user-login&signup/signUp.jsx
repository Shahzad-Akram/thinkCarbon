import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { handleSubmit, register, errors } = useForm();




    return (
        <Col md={8} lg={10} xl={7} className='my-5 mx-auto container-cart'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
                <h6 className='font-weight-bold text-white mb-0'>Create your Think Carbon Account</h6>
                <span className='text-white small text-right'>
                    Already member?
                    <Link to='/login' className='btn-link text-uppercase mx-1'>
                        <small>
                            Login
                        </small>
                    </Link>
                    here.
                 </span>
            </div>
            <Form className='bg-white p-4'>
                <Row className='row-cols-1 row-cols-lg-2 mx-0 small'>
                    <Col>

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
                    <Col className='mt-auto mb-4'>


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
                </Row>
                <Col lg={5} className='mx-auto'>
                    <Button variant='success' block type='submit' className='py-1' >
                        <small className='text-uppercase font-weight-bold'>
                            Sign Up
                            </small>
                    </Button>
                </Col>
            </Form>
        </Col>
    )
}

export default SignUp;