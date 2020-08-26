import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuItem = ({ onMouseEnter, onMouseLeave, itemName, link }) => (
  <ListGroup.Item
    as={Link}
    to={link}
    className='py-1 border-0 rounded-0'
    action
    variant='link'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {itemName}
  </ListGroup.Item>
);

export default MenuItem;
