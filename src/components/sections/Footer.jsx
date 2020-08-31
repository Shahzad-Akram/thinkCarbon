import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Container fluid className='Seciton-footer  px-0 py-4 text-white '>
    <Row className='categories-container mx-0 justify-content-center'>
      <Col md={3}>
        <div className='d-flex flex-column mb-3'>
          <h6 className='font-weight-bold mb-1'>Customer Care</h6>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Track Your Daraz Order</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>
              Corporate & Bulk Purchasing
            </small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Track Your Daraz Order</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>
              Corporate & Bulk Purchasing
            </small>
          </Link>
        </div>
        <div className='d-flex flex-column'>
          <h6 className='font-weight-bold mb-1'>Make Money With Us</h6>
          <Link to='/'>
            <small className='font-weight-normal'>Daraz University</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Sell on Daraz</small>
          </Link>
        </div>
      </Col>
      <Col md={3}>
        <div className='d-flex flex-column mb-3 pt-4'>
          <h6 className='font-weight-bold mb-1'>Customer Care</h6>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Track Your Daraz Order</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>
              Corporate & Bulk Purchasing
            </small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <small>NTN Number : 4012118-6</small>
          <small>STRN Number : 1700401211818</small>
        </div>
      </Col>
      <Col md={3}>
        <div>
          <img
            className='filter-brightness'
            height='120'
            src='https://osp-server.s3.us-east-2.amazonaws.com/logo.png'
            alt='logo'
          />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Footer;
