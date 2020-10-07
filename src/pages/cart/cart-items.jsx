import React from 'react'
import { useCart } from 'react-use-cart';
import {
    Row,
    Col,
    Button,
    Form,
  
  } from 'react-bootstrap';
  import CheckBox from '../../components/check-box/check-box';
  import { Link } from 'react-router-dom';
  import SuitHeart from '../../assets/svgs/SuitHeart';
  import TrashIcon from '../../assets/svgs/Trash';
 

 const CartItems = () => {
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems
    
      } = useCart();
    return (
        <>
        {isEmpty ? (
            <div className='h-100 d-flex flex-column justify-content-center align-items-center py-5 py-md-0'>
              <small className='font-weight-bold'>There are no items in this cart</small>
              <Link to ='/'>
              <Button variant='outline-success' className='d-flex mt-3 px-5'>
                <small>CONTINUE SHOPPING</small>
              </Button>
              </Link>
            </div>
          ) : (
              items.map((purchase) => (
                <Row className='mx-0 py-3 pl-2 pr-2 pr-md-4 border-bottom'>
                  <Col md={6} className='d-flex px-0 order-0 order-md-first'>
                    <span>
                      <CheckBox />
                    </span>
                    <Link to='/product-view' className='mx-2'>
                      <img
                        className='object-fit-contain'
                        width={80}
                        height={80}
                        src={purchase.images}
                        alt='phone'
                      />
                    </Link>
                    <div>
                      <Link to='/product-view' className='btn-link small'>
                        <div className='font-weight-bold'>
                          {purchase.name} - 3GB Ram - 64GB Rom - 5000mAh Battery
                          - 13MP Triple Camera
                      </div>
                        <div>
                          Huawei, Storage Capacity:64GB, Color Family:GREEN
                      </div>
                      </Link>
                      <div className='small'>
                        {purchase.quantity === purchase.stockQuantity ? (
                          <span className='text-danger font-weight-bold text-capitalize'>
                            out of stock
                        </span>
                        ) : (
                            <small>
                              Only {purchase.stockQuantity - purchase.quantity}{' '}
                              item(s) in stock
                        </small>
                          )}
                      </div>
                    </div>
                  </Col>
                  <div className='order-first order-md-2 col-9 col-md-auto px-0 justify-content-between mr-auto mx-md-auto mb-2 mb-md-0 d-flex flex-md-column'>
                    <div className='text-success'>Rs. {purchase.price}</div>
                    <div className='text-line-through'>
                      <small>Rs. 22,000</small>
                    </div>
                    <div>
                      <small>-5%</small>
                    </div>
                    <span>
                      <Button className='p-0' variant='link'>
                        <span className='mr-2'>
                          <SuitHeart height={15} />
                        </span>
                      </Button>
                      <Button
                        className='p-0'
                        variant='link'
                        onClick={() => removeItem(purchase._id)}
                      >
                        <span>
                          <TrashIcon height={15} />
                        </span>
                      </Button>
                    </span>
                  </div>
                  <div className='order-md-3 mt-2 mt-md-0 mb-0 small d-flex align-items-center align-self-baseline'>
                    <Button
                      variant='light'
                      className='py-0 px-3 d-flex align-items-center justify-content-center product-btn-count'
                      onClick={() =>
                        updateItemQuantity(purchase._id, purchase.quantity - 1)
                      }
                    >
                      -
                  </Button>
                    <h6 className='mb-0 mx-3'> {purchase.quantity} </h6>
                    <Button
                      variant='light'
                      disabled={
                        purchase.quantity === purchase.stockQuantity
                          ? true
                          : false
                      }
                      className='py-1 px-3 d-flex align-items-center justify-content-center product-btn-count'
                      onClick={() =>
                        updateItemQuantity(purchase._id, purchase.quantity + 1)
                      }
                    >
                      +
                  </Button>
                  </div>
                </Row>
              ))
            )}
            </>
    )
}
export default CartItems