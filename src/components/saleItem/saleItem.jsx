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
}) => {
  return (
    <Card as={Link} to={link} className='Sale-item'>
      <Card.Img variant='top' src={photo} />
      <Card.Body className='px-1'>
        <Card.Text className='small'>{itemName}</Card.Text>
        <Card.Title className='title-price'>{price}</Card.Title>
        <small className='text-muted'>
          <span className='text-line-through'>{priceMinus}</span>
          <cite title='Source Title'>{priceDiscount}</cite>
        </small>
      </Card.Body>
    </Card>
  );
};

export default SaleItem;
