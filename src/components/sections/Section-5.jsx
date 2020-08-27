import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoriesItem from '../collection-item/categories-item';

const SectionFive = () => (
  <Container className='Section-5 px-0 pb-4'>
    <div className='d-flex align-items-center justify-content-between px-1 mb-2'>
      <h6 className='font-weight-bold'>Categories</h6>
    </div>

    <Row className='categories-container mx-0'>
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/dd79b8965113c842e8270c4ab8d00aaa.jpg'
        title='Top-Load Washers'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/mdc/d3d5cd45e1262de499b36a8e460f2cdb.png'
        title='Washing Machines'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/original/8cc66a06f28b06bebec6221e3ebf9842.jpg'
        title='Measuring Tools & Scales'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/3a59ee3c068a9f358d2e75d8434d4701.jpg'
        title='Tablets'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/78eba222fa4bca8ea3af094c817b8ebf.jpg'
        title='Clocks'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/d4804d01c3bb665808c5ae57668daa17.jpg'
        title='Brain Teasers'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/dd79b8965113c842e8270c4ab8d00aaa.jpg'
        title='Top-Load Washers'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/mdc/d3d5cd45e1262de499b36a8e460f2cdb.png'
        title='Washing Machines'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/original/8cc66a06f28b06bebec6221e3ebf9842.jpg'
        title='Measuring Tools & Scales'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/3a59ee3c068a9f358d2e75d8434d4701.jpg'
        title='Tablets'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/78eba222fa4bca8ea3af094c817b8ebf.jpg'
        title='Clocks'
      />
      <CategoriesItem
        link='/'
        product='https://static-01.daraz.pk/p/d4804d01c3bb665808c5ae57668daa17.jpg'
        title='Brain Teasers'
      />
    </Row>
  </Container>
);

export default SectionFive;
