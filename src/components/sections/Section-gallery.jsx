import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const SectionGallery = () => {
  return (
    <Container className='px-0 mb-3'>
      {/* <h6 className='font-weight-bold text-white text-capitalize  my-3 px-3 px-sm-1'>
        Categories
      </h6> */}
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
      <Row className='row-cols-2 row-cols-lg-3 mx-0 bg-white text-center py-3'>
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>
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
