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
    <Card as={Link} to={link} className='Sale-item'>
      <Card.Img variant='top' className='Sale-item-image' src={photo} />
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
