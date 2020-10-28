import React,{useEffect, useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isLoggedIn} from '../../actions';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
    const { isAuthenticated } = useSelector((state) => state.user);
    const { handleSubmit, register, errors } = useForm();
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (isAuthenticated) {
          history.push('/cart-checkout');
        }
         else {
          isLoggedIn(dispatch)
        }
      }, [isAuthenticated, dispatch, history]);

     const onSubmit = async (data) => {
         try{
        setLoading(true)
        const response = await axios.post('https://think-carbon-neutral-shop.herokuapp.com/auth/signup',data);
        toast.success(`${response.data.message} now login please`, {
            autoClose: '500',
          })
        history.push('/login');
        setLoading(false)
        console.log(response)
         }
         catch (error) {
            setLoading(true)
             console.log(error)
             toast.error(`Oops Something went wrong`, {
                autoClose: '1500',
              })
              setLoading(false)
         }
      }

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
            <Form className='bg-white p-4' onSubmit={handleSubmit(onSubmit)}>
                <Row className='row-cols-1 row-cols-lg-2 mx-0 small'>
                    <Col>

                        <Form.Group>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type='text'
                                name='firstname'
                                ref={register({ required: true, })}
                                placeholder='Enter your first and last name'
                            />
                            {errors.name && (
                                <p style={{ color: "red" }}>Oops. Name Required.</p>
                            )}

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name='lastname'
                                ref={register}
                                type='text'
                                placeholder='Please enter your phone number'
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='password'
                                ref={register({ required: true, })}
                                type='password'
                                placeholder='For Example: House# 123, Street# 123, ABC Road'
                            />
                            {errors.address && (<p style={{ color: "red" }}>Oops. Address Required.</p>)}
                        </Form.Group>


                    </Col>
                    <Col className='mt-auto mb-4'>


                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name='email'
                                ref={register({ required: true })}
                                type='email'
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
            <ToastContainer />
        </Col>
    )
}

export default SignUp;