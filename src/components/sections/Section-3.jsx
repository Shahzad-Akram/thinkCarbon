import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CollectionItem from '../collection-item/collection-item';
import { Link } from 'react-router-dom';

const SectionThree = () => (
  <Container className='Section-3 px-0 mb-4'>
    <div className='d-flex align-items-center justify-content-between px-1 mb-2'>
      <h6 className='font-weight-bold'>Collections</h6>
      <Link to='/' className='btn-link text-uppercase'>
        <small>Show more</small>
      </Link>
    </div>

    <Row className='collection-container mx-0'>
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/original/bb5f26f344d8de3fbadb355965b7f20e.jpg'
        productTwo='https://static-01.daraz.pk/original/e87a7cf800e5d0dd7e2d7743bffe9ec9.jpg'
        productThree='https://static-01.daraz.pk/original/dee8c85423ac704cd5b4b81a2c8b95eb.jpg'
      />
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/original/5965f9c015d4515f74655e1c3d0dfa89.jpg'
        productTwo='https://static-01.daraz.pk/p/ab94818c5079a620eb1a003bdc22ba95.jpg'
        productThree='https://static-01.daraz.pk/p/c5a10bcc8ec87aa42435950e7cfae5f3.jpg'
      />
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/p/69b06574e8ee8b37761c68164064217d.jpg'
        productTwo='https://static-01.daraz.pk/original/746dc2edbf81b6d36cf54b0bfcf3f963.jpg'
        productThree='https://static-01.daraz.pk/p/e09b666f03b70800cb0fa042a3fce30e.jpg'
      />
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/original/f2dbb73ea1c1c2410375a149c839d192.jpg'
        productTwo='https://static-01.daraz.pk/p/d3e5d34af886ef471ea8a495faba97ea.jpg'
        productThree='https://static-01.daraz.pk/p/aa0bfdcfa23c0a4f031451c5429bfec3.jpg'
      />
    </Row>
    <Row className='collection-container mx-0'>
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/original/bb5f26f344d8de3fbadb355965b7f20e.jpg'
        productTwo='https://static-01.daraz.pk/original/e87a7cf800e5d0dd7e2d7743bffe9ec9.jpg'
        productThree='https://static-01.daraz.pk/original/dee8c85423ac704cd5b4b81a2c8b95eb.jpg'
      />
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/original/5965f9c015d4515f74655e1c3d0dfa89.jpg'
        productTwo='https://static-01.daraz.pk/p/ab94818c5079a620eb1a003bdc22ba95.jpg'
        productThree='https://static-01.daraz.pk/p/c5a10bcc8ec87aa42435950e7cfae5f3.jpg'
      />
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/p/69b06574e8ee8b37761c68164064217d.jpg'
        productTwo='https://static-01.daraz.pk/original/746dc2edbf81b6d36cf54b0bfcf3f963.jpg'
        productThree='https://static-01.daraz.pk/p/e09b666f03b70800cb0fa042a3fce30e.jpg'
      />
      <CollectionItem
        link='/'
        title='Storage & Organization'
        subtitle='189 products'
        productOne='https://static-01.daraz.pk/original/f2dbb73ea1c1c2410375a149c839d192.jpg'
        productTwo='https://static-01.daraz.pk/p/d3e5d34af886ef471ea8a495faba97ea.jpg'
        productThree='https://static-01.daraz.pk/p/aa0bfdcfa23c0a4f031451c5429bfec3.jpg'
      />
    </Row>
  </Container>
);

export default SectionThree;
