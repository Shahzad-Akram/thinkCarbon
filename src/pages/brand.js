import React from 'react'
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  Pagination,
  Spinner,
} from 'react-bootstrap';

const brand = () => {
  return (
    <Row className='Section-2 categories-nav-brand mx-0 mt-3 mb-4 flex-column overflow-auto d-none d-md-flex'>
      <Col
        xs={4}
        lg={2}


        className='px-0 d-flex justify-content-center align-items-center bg-white border rounded flex-fill'
      >
        <img
          height={80}
          src='https://static-01.daraz.pk/original/9593a960fd8c7805479ff31fa0fcc137.jpg'
          alt='brand'
        />
      </Col>
      <Col
        xs={4}
        lg={2}


        className='px-0 d-flex justify-content-center align-items-center bg-white border rounded flex-fill'
      >
        <img
          height={80}
          src='https://static-01.daraz.pk/original/31a613d4825ce415688502f82a14454f.jpg'
          alt='brand'
        />
      </Col>
      <Col
        xs={4}
        lg={2}


        className='px-0 d-flex justify-content-center align-items-center bg-white border rounded flex-fill'
      >
        <img
          height={80}
          src='https://static-01.daraz.pk/original/1de455b6b129d96edbbe9448ccd86987.jpg'
          alt='brand'
        />
      </Col>
      <Col
        xs={4}
        lg={2}


        className='px-0 d-flex justify-content-center align-items-center bg-white border rounded flex-fill'
      >
        <img
          height={80}
          src='https://static-01.daraz.pk/brand/nokia_504b2cdb5d6726eba6435462a10b66f8.jpg'
          alt='brand'
        />
      </Col>
      <Col
        xs={4}
        lg={2}


        className='px-0 d-flex justify-content-center align-items-center bg-white border rounded flex-fill'
      >
        <img
          height={80}
          src='https://static-01.daraz.pk/original/6bb7204851b28b9866cbacbc37147500.jpg'
          alt='brand'
        />
      </Col>
      <Col
        xs={4}
        lg={2}


        className='px-0 d-flex justify-content-center align-items-center bg-white border rounded flex-fill'
      >
        <img
          height={80}
          src='https://static-01.daraz.pk/brand/qmobile_b4f65b4bef2af085a10af3144f84cd3a.jpg'
          alt='brand'
        />
      </Col>
    </Row>
  )
}
export default brand;