import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CollectionItem = ({
  link,
  title,
  subtitle,
  productOne,
  productTwo,
  productThree,
}) => (
  <Col
    as={Link}
    to={link}
    className='collection-box bg-white border-bottom border-right text-center p-2 '
  >
    <div className='collection-box-title small text-capitalize font-weight-bold '>
      {title}
    </div>
    <div className='collection-box-subtitle small mb-3'>
      <small className='text-capitalize font-weight-bold text-muted'>
        {subtitle}
      </small>
    </div>
    <div className='collection-box-items d-flex align-items-center justify-content-around'>
      <Image
        height={70}
        src={productOne}
        rounded
        className='object-fit-contain'
      />

      <Image
        height={70}
        src={productTwo}
        rounded
        className='object-fit-contain'
      />

      <Image
        height={70}
        src={productThree}
        rounded
        className='object-fit-contain'
      />
    </div>
  </Col>
);

export default CollectionItem;
