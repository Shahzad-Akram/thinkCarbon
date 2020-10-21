import React, {useEffect} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser, isLoggedIn} from '../../actions';

import { useHistory } from 'react-router-dom';



const Login = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();

    
    const   onSubmit = async (data) => {
        try{

        setLoading(true)
        const response = await axios.post('https://think-carbon-neutral-shop.herokuapp.com/auth/signin',data);
        loginUser(dispatch,response.data);
        
        toast.success(`Welcome ${response.data.user.firstname}`, {
            autoClose: '1500',
          })
         
        setLoading(false)
        }
        catch(error) {
            setLoading(false)
            console.log(error)
            toast.error('Wrong Credential', {
                autoClose: '1500',
              })
        }
        
    }
    useEffect(() => {
        console.log(isAuthenticated)
      if (isAuthenticated) {
        history.push('/cart-checkout');
      }
       else {
        isLoggedIn(dispatch)
      }
    }, [isAuthenticated, dispatch, history]);



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
            <Form onSubmit={handleSubmit(onSubmit)} className='bg-white p-4'>
                <Row className='row-cols-1 row-cols-lg-2 mx-0'>
                    <Col>
                        <Form.Group>
                            <Form.Label className='small'>Phone Number or Email</Form.Label>
                            <Form.Control placeholder="Please enter your Phone Number or Email" 
                            type = 'email'
                            name= 'email'
                            ref={register({ required: true, })}
                            />
                            {errors.name && (
                          <p style={{ color: "red" }}>Oops. Email Required.</p>
                        )}
                        </Form.Group>
                        <Form.Group className='mb-0'>
                            <Form.Label className='small'>Password</Form.Label>
                            <Form.Control placeholder="Please enter your password" 
                            type = 'password'
                            name= 'password'
                            ref={register({ required: true, })}/>
                            <div className='text-right'>
                                <Link className='small btn-link'>
                                    <small>Forgot Password?</small>
                                </Link>
                            </div>
                            {errors.name && (
                          <p style={{ color: "red" }}>Oops. Password Required.</p>
                        )}
                        </Form.Group>
                    </Col>
                    <Col className='mt-auto mb-4'>
                        <Button variant='success' block type='submit' className='mt-4 py-1' disabled ={loading}>
                            <small className='text-uppercase font-weight-bold'>
                                Login
                            </small>
                        </Button>
                    </Col>
                </Row>
                <ToastContainer />
            </Form>
        </Col>
    )
}

export default Login;