import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '../../assets/svgs/ChevronRight';

const ModelCart = ({ show, onHide, onClick }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop='static' size='lg'>
      <Modal.Header className='py-2' closeButton></Modal.Header>
      <Modal.Body className='p-0'>
        <Row>
          <Col className='border-right'>
            <section className='p-2'>
              <div className='text-success mb-3 ml-2'>
                <span className='mr-2'>
                  <CheckSquareIcon height={15} />
                </span>
                <span>1 new item(s) have been added to your cart</span>
              </div>
              <div className='d-flex small'>
                <Link className='p-0 mr-3'>
                  <img
                    height={40}
                    className='object-fit-contain'
                    src='https://static-01.daraz.pk/p/f6a744878b530ad89586d090975aa153.png'
                    alt='phone'
                  />
                </Link>
                <div>
                  <div className='mb-1'>
                    Infinix NOTE 7 4GB + 64GB 48MP Video Camera 5000 mAh battery
                    Helio G70
                  </div>
                  <small className='text-black-50'>
                    Storage Capacity:64GB, Color Family:Aether Black
                  </small>
                  <div className='text-success mt-1'>Rs. 23,999</div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <span className='text-line-through text-black-50 mr-2'>
                        Rs. 24,999
                      </span>
                      <span>-4%</span>
                    </div>
                    <div>
                      <span className='text-black-50 mr-1'>Qty:</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Col>
          <Col lg={4}>
            <section className='py-2 small'>
              <div className='mb-1 px-3'>
                <span className='mr-2'> My Shopping Cart</span>
                <small className='text-black-50'>(3 items)</small>
              </div>
              <div className='d-flex justify-content-between mb-1 px-3'>
                <span className='small'>
                  <span className='mr-1 text-black-50'>Subtotal</span>
                  <span>
                    <ChevronRightIcon />
                  </span>
                </span>
                <span>Rs. 23,999</span>
              </div>
              <div className='d-flex justify-content-between mb-1 px-3'>
                <span className='small'>
                  <span className='mr-1 text-black-50'>Shipping Fee</span>
                  <span>
                    <ChevronRightIcon />
                  </span>
                </span>
                <span>Rs. 119</span>
              </div>
              <div className='d-flex justify-content-between mb-1 px-3 small'>
                <span>
                  <span className='mr-1 text-black-50'>
                    Shipping Fee Discount
                  </span>
                  <span>
                    <ChevronRightIcon />
                  </span>
                </span>
                <span>-Rs. 119</span>
              </div>
              <div className='d-flex justify-content-between mb-1 px-3'>
                <span>Total</span>
                <span className='text-success'>Rs. 23,999</span>
              </div>
              <div className='d-flex justify-content-center my-3'>
                <Button
                  as={Link}
                  to='/'
                  size='sm'
                  variant='outline-success'
                  className='d-flex mr-2'
                >
                  <small>GO TO CART</small>
                </Button>
                <Button
                  as={Link}
                  to='/'
                  size='sm'
                  variant='success'
                  className='d-flex'
                >
                  <small>CHECK OUT</small>
                </Button>
              </div>
            </section>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ModelCart;
