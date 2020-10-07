import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '../../assets/svgs/ChevronRight';
import { useCart } from "react-use-cart";


const ModelCart = ({data, show, onHide, onClick }) => {
  const { addItem, totalUniqueItems,cartTotal } = useCart();
  return (
    <Modal show={show} onHide={onHide} backdrop='static' size='lg' centered>
      <Modal.Header className='py-2' closeButton></Modal.Header>
      <Modal.Body className='p-0'>
      {data === undefined ? <p>loading ...</p>: 
        <Row>
          <Col className='border-right'>
            <section className='p-2'>
              <div className='text-success mb-3 ml-2'>
                <span className='mr-2'>
                  <CheckSquareIcon height={15} />
                </span>
                <span>1 new item has been added to your cart</span>
              </div>
              <div className='d-flex small'>
                <Link className='p-0 mr-3'>
                  <img
                    height={40}
                    className='object-fit-contain'
                    src={data.data.images}
                    alt='phone'
                  />
                </Link>
               
                <div>
                  <div className='mb-1'>
                    {data.data.name} 4GB + 64GB 48MP Video Camera 5000 mAh battery
                    Helio G70
                  </div>
                  <small className='text-black-50'>
                   {data.data.details}
                  </small>
                  <div className='text-success mt-1'> &#36;	{data.data.price}</div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <span className='text-line-through text-black-50 mr-2'>
                      &#36;	{data.data.price}
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
                <small className='text-black-50'>({totalUniqueItems} items)</small>
              </div>
              <div className='d-flex justify-content-between mb-1 px-3'>
                <span className='small'>
                  <span className='mr-1 text-black-50'>Subtotal</span>
                  <span>
                    <ChevronRightIcon />
                  </span>
                </span>
                    <span>&#36; {cartTotal}</span>
              </div>
              <div className='d-flex justify-content-between mb-1 px-3'>
                <span className='small'>
                  <span className='mr-1 text-black-50'>Shipping Fee</span>
                  <span>
                    <ChevronRightIcon />
                  </span>
                </span>
                <span>&#36; 119</span>
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
                <span>&#36; 119</span>
              </div>
              <div className='d-flex justify-content-between mb-1 px-3'>
                <span>Total</span>
                <span className='text-success'>&#36; {cartTotal}</span>
              </div>
              <div className='d-flex justify-content-center my-3'>
                <Button
                  as={Link}
                  to='/cart'
                  size='sm'
                  variant='outline-success'
                  className='d-flex mr-2'
                >
                  <small>GO TO CART</small>
                </Button>
                <Button
                  as={Link}
                  to='/cart-checkout'
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
}
      </Modal.Body>
    </Modal>
  );
};

export default ModelCart;
