import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Brand from '../brands/brand';
import { Link } from 'react-router-dom';

const SectionFour = () => (
  <Container className='Section-4  px-0 mb-3'>
    <div className='d-flex align-items-center  justify-content-between px-3 px-sm-1 mb-3'>
      <h6 className='font-weight-bold text-white'>Brand Collections</h6>
      <Link to='/' className='btn-link text-uppercase'>
        <small>Show more</small>
      </Link>
    </div>
    <Row className='mx-0 bg-white px-3 px-md-0 row-cols-2 overflow-auto flex-nowrap flex-md-wrap align-items-end  justify-content-md-around justify-content-xl-between'>
      <Brand
        link='/'
        itemPhoto='https://static-01.daraz.pk/p/2cbea36afb936db253b233f7da149f37.jpg'
        brandPhoto='https://static-01.daraz.pk/other/shop/af461a1e35450b5d91f7116329301351.jpeg'
        brandTitle='haier'
        brandSubTitle='Inspired Living'
      />
      <Brand
        link='/'
        itemPhoto='https://static-01.daraz.pk/p/d6abbe0440da5fc1d71fd4504621ec9e.jpg'
        brandPhoto='https://static-01.daraz.pk/other/shop/893c7071913f900e482d68fe3c78aa1a.jpeg'
        brandTitle=' Boss Home Appliances '
        brandSubTitle=' Boss Home Appliances '
      />
      <Brand
        link='/'
        itemPhoto='https://static-01.daraz.pk/p/d7290e284658e5b748136aad832625da.jpg'
        brandPhoto='https://static-01.daraz.pk/other/shop/0b955d82d222b98d81e583ac779faf27.jpeg'
        brandTitle=' Cool and Cool '
        brandSubTitle=' Cool and Cool '
      />
      <Brand
        link='/'
        itemPhoto='https://static-01.daraz.pk/original/d95c41037103b000453769132a12111a.jpg'
        brandPhoto='https://static-01.daraz.pk/other/shop/e2277317998ecd74df4d9802f465d0c8.jpeg'
        brandTitle='SAC'
        brandSubTitle='SAC'
      />
      <Brand
        link='/'
        itemPhoto='https://static-01.daraz.pk/original/8b8fbc83053e352a446424238ccd9b1b.jpg'
        brandPhoto='https://static-01.daraz.pk/other/shop/81b15474fcb19e7d8e60364482c81760.jpeg'
        brandTitle=' Liqui Moly'
        brandSubTitle=' Liqui Moly'
      />
    </Row>
  </Container>
);

export default SectionFour;
