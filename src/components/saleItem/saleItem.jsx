import React from 'react';
import './saleItem.styles.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SaleItem = ({
  link,
  photo,
  itemName,
  price,
  priceMinus,
  priceDiscount,
  available,
  children,
}) => {
  return (
    <Card  className='Sale-item shadow-sm'>
      <Link to={link}>
      <Card.Img
        variant='top'
        height={200}
        className='Sale-item-image object-fit-contain'
        src={photo}
      />
      </Link>
      <Card.Body className='px-1 d-flex justify-content-between flex-column'>
        <Card.Text className='small'>
          <small>{itemName}</small>
        </Card.Text>
        <Card.Title className='title-price'>{price}</Card.Title>
        <small className='text-muted'>
          <div className='small text-info'>{available}</div>
          <span className='text-line-through mr-1 small'>{priceMinus}</span>
          <cite className='small'>{priceDiscount}</cite>
        </small>

        {children}
      </Card.Body>
    </Card>
  );
};

export default SaleItem;
