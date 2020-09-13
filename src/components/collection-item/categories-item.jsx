import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoriesItem = ({ link, product, title }) => (
  <Col
    xs={4}
    md={3}
    lg={2}
    as={Link}
    to={link}
    className='categories-box bg-white shadow-sm text-center p-2 '
  >
    <div className='categories-box-items d-flex align-items-center justify-content-around mb-2'>
      <Image
        height={100}
        src={product}
        rounded
        className='object-fit-contain'
      />
    </div>
    <div className='categories-box-title small text-capitalize'>
      <small className='font-weight-bold'>{title}</small>
    </div>
  </Col>
);

export default CategoriesItem;
