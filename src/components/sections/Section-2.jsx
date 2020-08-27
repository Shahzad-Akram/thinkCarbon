import React from 'react';
import { Container, CardDeck, Button } from 'react-bootstrap';

import SaleItem from '../saleItem/saleItem';
import Countdown from 'react-countdown';

const SectionTwo = () => (
  <Container className='Section-2 px-0 my-4'>
    <h6 className='font-weight-bold '>Flash Sale</h6>
    <div className='bg-white'>
      <div className='dark-mode-green row justify-content-between justify-content-md-start mx-0 px-3 py-2 align-items-baseline small border-bottom'>
        <span className='text-green-light mr-5 text-capitalize font-weight-bold mb-2 mb-sm-0'>
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
      <CardDeck className='row-cols-2 d-flex overflow-auto pt-3 pb-0 pb-md-3'>
        <SaleItem
          photo='https://static-01.daraz.pk/p/fbfb1ecbb185f2bc0b2ed698676b0978.jpg'
          itemName='Wiresto TWS Wireless Bluetooth V5.0 Headset for iPhone Xiaomi'
          price='Rs.539'
          priceMinus='Rs.11,445'
          priceDiscount='-83%'
        />
        <SaleItem
          photo='https://static-01.daraz.pk/p/70baeaef1a49ccea09db030294efad3f.jpg'
          itemName='Wiresto TWS Wireless Bluetooth V5.0 Headset for iPhone Xiaomi'
          price='Rs.539'
        />

        <SaleItem
          photo='https://static-01.daraz.pk/p/35467a33bbf0085a99b6899d232134b3.jpg'
          itemName='Wiresto TWS Wireless Bluetooth V5.0 Headset for iPhone Xiaomi'
          price='Rs.539'
          priceMinus='Rs.11,445'
          priceDiscount='-83%'
        />
        <SaleItem
          photo='https://static-01.daraz.pk/p/35467a33bbf0085a99b6899d232134b3.jpg'
          itemName='Wiresto TWS Wireless Bluetooth V5.0 Headset for iPhone Xiaomi'
          price='Rs.539'
          priceMinus='Rs.11,445'
          priceDiscount='-83%'
        />
        <SaleItem
          photo='https://static-01.daraz.pk/p/35467a33bbf0085a99b6899d232134b3.jpg'
          itemName='Wiresto TWS Wireless Bluetooth V5.0 Headset for iPhone Xiaomi'
          price='Rs.539'
          priceMinus='Rs.11,445'
          priceDiscount='-83%'
        />
      </CardDeck>
    </div>
  </Container>
);

export default SectionTwo;
