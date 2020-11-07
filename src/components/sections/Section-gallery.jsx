import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SectionGallery = () => {
  return (
    <Container className='px-0 mb-3 Section-2'>
      <div className='bg-white'>
        <div className='dark-mode-green row justify-content-between mx-0 px-3 py-2 align-items-baseline small border-bottom'>
          <span className='mr-5 text-capitalize text-green-light font-weight-bold mb-2 mb-sm-0'>
            Categories
          </span>

          <Button variant='outline-success' size='sm' className='d-flex'>
            <small className='text-uppercase'> Shop More</small>
          </Button>
        </div>
      </div>
      <Row className='row-cols-2 row-cols-lg-3 justify-content-around mx-0 bg-white text-center py-3'>
        <Col xl={3} 
           className='px-xl-0 mb-3 mx-xl-3' 
           as={Link}
            to='/'>
          <span>
            <img
              className='w-100'
              src='https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg'
              alt='item'
            />
          </span>
          <h6 className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </Col>
        <Col xl={3} 
           className='px-xl-0 mb-3 mx-xl-3 ' 
           as={Link}
            to='/'>
          <span>
            <img
              className='w-100'
              src='https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg'
              alt='item'
            />
          </span>
          <h6 className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </Col>
        <Col xl={3} 
           className='px-xl-0 mb-3 mx-xl-3 ' 
           as={Link}
            to='/'>
          <span>
            <img
              className='w-100'
              src='https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg'
              alt='item'
            />
          </span>
          <h6 className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </Col>
         <Col xl={3} 
           className='px-xl-0 mb-3 mx-xl-3'  
           as={Link}
            to='/'>
          <span>
            <img
              className='w-100'
              src='https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg'
              alt='item'
            />
          </span>
          <h6 className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </Col>
         <Col xl={3} 
           className='px-xl-0 mb-3 mx-xl-3'  
           as={Link}
            to='/'>
          <span>
            <img
              className='w-100'
              src='https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg'
              alt='item'
            />
          </span>
          <h6 className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </Col>
         <Col xl={3} 
           className='px-xl-0 mb-3 mx-xl-3'  
           as={Link}
            to='/'>
          <span>
            <img
              className='w-100'
              src='https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg'
              alt='item'
            />
          </span>
          <h6 className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionGallery;
