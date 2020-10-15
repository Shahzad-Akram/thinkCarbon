import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Col md={8} lg={9} xl={6} className='my-5 mx-auto container-cart'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
                <h6 className='font-weight-bold text-white mb-0'>Welcome to Think Carbon Please login.</h6>
                <span className='text-white small text-right'>
                    New member?
                    <Link to='/Signup' className='btn-link text-uppercase mx-1'>
                        <small>
                            Register
                        </small>
                    </Link>
                    here.
                 </span>
            </div>
            <Form className='bg-white p-4'>
                <Row className='row-cols-1 row-cols-lg-2 mx-0'>
                    <Col>
                        <Form.Group>
                            <Form.Label className='small'>Phone Number or Email</Form.Label>
                            <Form.Control placeholder="Please enter your Phone Number or Email" />
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label className='small'>Password</Form.Label>
                            <Form.Control placeholder="Please enter your password" />
                            <div className='text-right'>
                                <Link className='small btn-link'>
                                    <small>Forgot Password?</small>
                                </Link>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Col lg={5} className='mx-auto'>
                    <Button variant='success' block type='submit' className='py-1' >
                        <small className='text-uppercase font-weight-bold'>
                            Login
                            </small>
                    </Button>
                </Col>
            </Form>
        </Col>
    )
}

export default Login;