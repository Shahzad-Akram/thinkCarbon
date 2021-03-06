import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Brand = ({ link, itemPhoto, brandPhoto, brandTitle, brandSubTitle }) => {
  return (
    <Col
      as={Link}
      sm={4}
      lg={3}
      xl={2}
      to={link}
      className='brand-container d-flex flex-column text-center bg-white px-0  py-0 py-md-3 py-xl-0'
    >
      <span className='brand-item w-100 '>
        <img
          src={itemPhoto}
          alt='Brand'
          className='object-fit-contain rounded w-100 h-100'
        />
      </span>
      <span className='bg-wood text-white small text-capitalize'>
        <span className='brand-photo d-flex justify-content-center mt-n3 mb-1'>
          <img src={brandPhoto} alt='Brand' className='rounded' />
        </span>
        <b>{brandTitle}</b>
        <div className='small pb-2'>{brandSubTitle} </div>
      </span>
    </Col>
  );
};

export default Brand;
