import React, { useEffect } from 'react';
import { Container, CardDeck, Button, Spinner } from 'react-bootstrap';

import SaleItem from '../saleItem/saleItem';
import Countdown from 'react-countdown';

import { useSelector, useDispatch } from 'react-redux';
import { getProductslimit } from '../../actions';
import { useQuery } from 'react-query';


const SectionTwo = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const { status, error, data } = useQuery(['product', 5], getProductslimit);

  if (status !== 'loading') {
    dispatch({
      type: 'GET_PRODUCT_BY_LIMIT',
      payload: data,
    });
  }

  return (
    <Container className='Section-2 px-0 mb-3'>
      <h6 className='font-weight-bold text-white  my-3 px-3 px-sm-1'>
        Flash Sale
      </h6>
      <div className='bg-white'>
        <div className='dark-mode-green row justify-content-between justify-content-md-start mx-0 px-3 py-2 align-items-baseline small border-bottom'>
          <span className='mr-5 text-capitalize text-green-light font-weight-bold mb-2 mb-sm-0'>
            on sale now
          </span>
          <span className='mr-0 mr-md-auto mb-2 mb-sm-0'>
            <span className='mr-2 font-weight-bold'>Ending in</span>
            <span className='countdown'>
              <Countdown date={Date.now() + 700005000} />
            </span>
          </span>
          <Button
            variant='outline-success'
            size='sm'
            className='d-flex mb-2 mb-sm-0'
          >
            <small className='text-uppercase'> Shop More</small>
          </Button>
        </div>
        <CardDeck className='row-cols-2  d-flex overflow-auto pt-3 pb-0 pb-md-3 mx-3 mx-md-0'>
          {status == 'loading' ? (
            <div className='ml-5'>
              <Spinner animation='border' variant='success' />
            </div>
          ) : (
            data.data.products.map((product) => (
              <SaleItem
              link={`/product-view/${product._id}`}
                photo={product.images}
                itemName={product.name}
                price={product.price}
                priceMinus='Rs.11,445'
                priceDiscount='-83%'
              />
            ))
          )}
        </CardDeck>
      </div>
    </Container>
  );
};

export default SectionTwo;
