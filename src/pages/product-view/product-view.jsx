import React, { useState } from 'react';
import './product-view.styles.css';
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  ProgressBar,
} from 'react-bootstrap';
import ChevronRightIcon from '../../assets/svgs/ChevronRight';
import { Link, useParams } from 'react-router-dom';
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from 'react-image-magnifiers';

// Icons
import StarFillIcon from '../../assets/svgs/Star-fill';
import StarHalfFillIcon from '../../assets/svgs/Star-half-fill';
import StarIcon from '../../assets/svgs/Star';
import ShareIcon from '../../assets/svgs/Share';
import SuitHeart from '../../assets/svgs/SuitHeart';
import CalendarWeekIcon from '../../assets/svgs/CalendarWeek';
import InfoFillIcon from '../../assets/svgs/InfoFill';
import GeoAltIcon from '../../assets/svgs/GeoAlt';
import PrintIcon from '../../assets/svgs/Print';
import HomeDeliveryIcon from '../../assets/svgs/HomeDelivery';
import ExpressDeliveryIcon from '../../assets/svgs/ExpressDelivery';
import CashOnDeliveryIcon from '../../assets/svgs/CashOnDelivery';
import CheckSquareIcon from '../../assets/svgs/CheckSquare';
import ShieldIcon from '../../assets/svgs/Shield';

import { useQuery } from 'react-query';
import { getSingleProduct } from '../../actions/index';
import { useDispatch } from 'react-redux';
import ModelCart from '../../components/model/model-cart';

const ProductView = () => {
  const [productItem1, setProductItem1] = useState(true);
  const [productItem2, setProductItem2] = useState(false);
  const [count, setCount] = useState(0);
  const progressOne = 80;
  const progressTwo = 60;
  const progressThree = 30;
  const progressFour = 20;
  const progressFive = 5;

  const dispatch = useDispatch();
  const id = useParams();

  const { status, error, data } = useQuery(
    ['product', id.id],
    getSingleProduct
  );


  if (status !== 'loading') {
    dispatch({
      type: 'GET_PRODUCT_BY_ID',
      payload: data,
    });
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModelCart data={data} show={show} onClick={handleClose} onHide={handleClose} />
      <Container className='px-0 mt-2 mb-4'>
        <div className='d-flex flex-column flex-md-row  px-2 px-md-0 align-items-baseline categories-nav border-bottom pb-2'>
          <Button variant='link' as={Link} className='p-0' to='/'>
            <small>Home</small>
          </Button>
          <span className='mx-2 text-white d-none d-md-block'>
            <ChevronRightIcon />
          </span>
          <Button variant='link' as={Link} className='p-0' to='/'>
            <small>Mobiles & Tablets</small>
          </Button>
          <span className='mx-2 text-white d-none d-md-block'>
            <ChevronRightIcon />
          </span>
          <Button variant='link' className='p-0' disabled>
            <small>
              Tecno Spark 5 Pro - 6.6" Dot Display - 4GB RAM - 128GB ROM - 16MP
              AI Quad Camera - 5000 mAh Battery
            </small>
          </Button>
        </div>
        <MagnifierContainer>
          {status === 'loading' ? (
            <h1>Loading ...</h1>
          ) : (
            <Row className='product-container mx-0 mb-3 bg-white'>
              <Col lg={3} className='py-3'>
                {productItem1 && (
                  <div className='product-pos'>
                    <div className='product-item border-bottom pb-3 mb-3'>
                      <MagnifierPreview imageSrc={data.data.images} />
                    </div>
                    <div>
                      <span className='product-item-sm border border-success'>
                        <img
                          className='h-100 w-100 object-fit-contain'
                          src={data.data.images}
                          alt='phone'
                        />
                      </span>
                    </div>
                  </div>
                )}
                {productItem2 && (
                  <div className='product-pos'>
                    <div className='product-item border-bottom pb-3 mb-3'>
                      <MagnifierPreview imageSrc={data.data.images} />
                    </div>
                    <div>
                      <span className='product-item-sm border border-success'>
                        <img
                          className='h-100 w-100 object-fit-contain'
                          src={data.data.images}
                          alt='phone'
                        />
                      </span>
                    </div>
                  </div>
                )}
              </Col>
              <Col className='py-3'>
                <div className='product-item-zoom'>
                  {productItem1 && (
                    <MagnifierZoom
                      className='z-index bg-white shadow-lg rounded-lg'
                      style={{ height: '500px' }}
                      imageSrc={data.data.images}
                    />
                  )}
                  {productItem2 && (
                    <MagnifierZoom
                      className='z-index bg-white shadow-lg rounded-lg'
                      style={{ height: '500px' }}
                      imageSrc={data.data.images}
                    />
                  )}
                </div>

                <section className='position-relative'>
                  <h5 className='mb-3'>
                    {data.data.name} - 6.6" Dot Display - 4GB RAM - 128GB ROM -
                    16MP AI Quad Camera - 5000 mAh Battery
                  </h5>

                  <div className='d-flex justify-content-between align-items-center'>
                    <small className='d-flex align-items-center'>
                      <span className='text-warning mr-2'>
                        <StarFillIcon height={15} />
                        <StarHalfFillIcon height={15} />
                        <StarIcon height={15} />
                        <StarIcon height={15} />
                        <StarIcon height={15} />
                      </span>
                      <Link className='btn btn-link p-0' to='/'>
                        <small>13 Ratings</small>
                      </Link>
                    </small>
                    <span>
                      <Button variant='link'>
                        <ShareIcon height={20} />
                      </Button>
                      <Button variant='link'>
                        <SuitHeart height={20} />
                      </Button>
                    </span>
                  </div>
                  <div className='small border-bottom pb-3 mb-3'>
                    <small className='font-weight-bold mr-1 text-black-50'>
                      Brand:
                    </small>

                    <Link className='btn-link p-0' to='/'>
                      <small>Tecno</small>
                    </Link>
                    <span className='mx-2'>|</span>
                    <Link className='btn-link p-0' to='/'>
                      <small>More Mobiles from Tecno</small>
                    </Link>
                  </div>
                </section>
                <section className='position-relative border-bottom pb-3 mb-3'>
                  <h3 className='text-green-light font-weight-bold'>
                    {' '}
                    {data.data.price} &#36;
                  </h3>
                  <div className='small'>
                    <small className='font-weight-bold mr-3 text-black-50'>
                      Installment
                    </small>
                    <span>
                      <span className='mr-2'>
                        <CalendarWeekIcon height={13} />
                      </span>
                      Up to 12 months, as low as Rs. 1,792 per month.
                    </span>
                  </div>
                </section>
                <section className='position-relative'>
                  <div className='d-flex align-items-baseline mb-3 '>
                    <small className='font-weight-bold mr-3 text-black-50'>
                      Color Family
                    </small>
                    <div>
                      <small className='position-relative'>
                        Please select the option
                        <span
                          className={
                            productItem1
                              ? 'd-inline-block mx-1 product-item-wrap'
                              : 'd-none'
                          }
                        >
                          Ice Jadeite
                        </span>
                        <span
                          className={
                            productItem2
                              ? 'd-inline-block mx-1 product-item-wrap'
                              : 'd-none'
                          }
                        >
                          Seabed Blue
                        </span>
                      </small>
                      <div className='d-flex mt-2'>
                        <Button
                          variant='outline-success'
                          onClick={() => setProductItem1(true)}
                          onMouseEnter={() => setProductItem1(true)}
                          onMouseLeave={() => setProductItem2(false)}
                          className='product-item-sm mr-3'
                        >
                          <img
                            className='h-100 w-100 object-fit-contain'
                            src='https://static-01.daraz.pk/p/f6a744878b530ad89586d090975aa153.png'
                            alt='phone'
                          />
                        </Button>
                        <Button
                          variant='outline-success'
                          onClick={() => setProductItem2(true)}
                          onMouseEnter={() => setProductItem2(true)}
                          onMouseLeave={() => setProductItem1(false)}
                          className='product-item-sm mr-3'
                        >
                          <img
                            className='h-100 w-100 object-fit-contain'
                            src='https://static-01.daraz.pk/p/f6a744878b530ad89586d090975aa153.png'
                            alt='phone'
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex align-items-baseline'>
                    <small className='font-weight-bold mr-3 text-black-50'>
                      Storage Capacity
                    </small>
                    <div>
                      <Form.Group controlId='number'>
                        <Form.Label className='small'>128GB</Form.Label>
                        <Form.Control
                          className='product-input-sm py-0 px-2'
                          type='text'
                          value='128GB'
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <small className='font-weight-bold mr-5 text-black-50'>
                      Quantity
                    </small>

                    <div className='d-flex align-items-center'>
                      <Button
                        variant='light'
                        className='py-0 px-3 d-flex align-items-center justify-content-center product-btn-count'
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </Button>
                      <h6 className='mb-0 mx-3'> {count} </h6>
                      <Button
                        variant='light'
                        className='py-1 px-3 d-flex align-items-center justify-content-center product-btn-count'
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </Button>
                      <small className='text-muted ml-3'>
                        Only 2 items left
                      </small>
                    </div>
                  </div>
                  <div className='d-flex align-items-baseline justify-content-around'>
                    <Button variant='outline-success' className='mr-3' block>
                      Buy Now
                    </Button>
                    <Button variant='success' block onClick={handleShow}>
                      Add to Cart
                    </Button>
                  </div>
                </section>
              </Col>

              <Col lg={3} className='py-3 bg-light'>
                <section className='border-bottom pb-3 mb-3'>
                  <div className='d-flex justify-content-between align-items-baseline small mb-2'>
                    <small className='font-weight-bold mr-1 text-black-50'>
                      Delivery Options
                    </small>
                    <Button variant='link' className='p-0'>
                      <InfoFillIcon height={13} />
                    </Button>
                  </div>
                  <div className='d-flex justify-content-between align-items-center small mb-3'>
                    <div className='d-flex align-items-center text-black-50'>
                      <GeoAltIcon height={18} />
                      <small className='font-weight-bold mr-1 w-75 ml-2'>
                        Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                      </small>
                    </div>
                    <Button variant='link' className='p-0'>
                      <small> Change</small>
                    </Button>
                  </div>
                  <div className='d-flex justify-content-between align-items-center small '>
                    <div className='d-flex align-items-center text-success'>
                      <PrintIcon height={18} />
                      <small className='font-weight-bold mr-1 ml-2 text-black-50'>
                        Fulfilled by Think Carbon
                      </small>
                    </div>
                  </div>
                </section>
                <section className='border-bottom pb-3 mb-3'>
                  <div className='d-flex justify-content-between align-items-baseline small mb-3'>
                    <div className='d-flex align-items-center text-black-50'>
                      <HomeDeliveryIcon height={20} />
                      <small className='font-weight-bold mr-1 ml-2'>
                        Home Delivery
                        <div className='font-weight-normal'>2 - 6 days</div>
                      </small>
                    </div>
                    <small className='font-weight-bold mr-1 text-black'>
                      Rs. 99
                    </small>
                  </div>
                  <div className='d-flex justify-content-between align-items-baseline small mb-3'>
                    <div className='d-flex align-items-center text-black-50'>
                      <ExpressDeliveryIcon height={20} />
                      <small className='font-weight-bold mr-1 ml-2'>
                        Express Delivery
                        <div className='font-weight-normal'>Next Day</div>
                      </small>
                    </div>
                    <small className='font-weight-bold mr-1 text-black'>
                      Rs. 139
                    </small>
                  </div>
                  <div className='d-flex justify-content-between align-items-baseline small'>
                    <div className='d-flex align-items-center text-black-50'>
                      <CashOnDeliveryIcon height={20} />
                      <small className='font-weight-bold mr-1 ml-2'>
                        Cash on Delivery Available
                      </small>
                    </div>
                  </div>
                </section>
                <section className='border-bottom pb-3 mb-3'>
                  <div className='d-flex justify-content-between align-items-baseline small mb-2'>
                    <small className='font-weight-bold mr-1 text-black-50'>
                      Return & Warranty
                    </small>
                    <Button variant='link' className='p-0'>
                      <InfoFillIcon height={13} />
                    </Button>
                  </div>
                  <div className='d-flex justify-content-between align-items-baseline small mb-3'>
                    <div className='d-flex align-items-center text-black-50'>
                      <CheckSquareIcon height={13} color='green' />
                      <small className='font-weight-bold mr-1 ml-2'>
                        100% Authentic
                      </small>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-baseline small mb-3'>
                    <div className='d-flex align-items-center text-black-50'>
                      <CheckSquareIcon height={13} color='green' />
                      <small className='font-weight-bold mr-1 ml-2'>
                        14 days easy return
                        <div className='font-weight-normal'>
                          Change of mind is not applicable
                        </div>
                      </small>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-baseline small'>
                    <div className='d-flex align-items-center text-black-50'>
                      <ShieldIcon height={15} />
                      <small className='font-weight-bold mr-1 ml-2'>
                        1 Year Brand Warranty
                      </small>
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
          )}

          <section className='product-information mx-0 mb-3 bg-white '>
            <h6 className='bg-light py-3 pl-4 font-weight-bold'>
              Product details of Tecno Spark 5 Pro - 6.6" Dot Display - 4GB RAM
              - 128GB ROM - 16MP AI Quad Camera - 5000 mAh Battery
            </h6>
            <h6 className='pt-2 pb-3 mb-3 mx-5 border-bottom'>
              <small className='d-list-item'>
                Product details of Tecno Spark 5 Pro - 6.6" Dot Display - 4GB
                RAM - 128GB ROM - 16MP AI Quad Camera - 5000 mAh Battery
              </small>
            </h6>
            <div className='pl-5 pb-3 mb-3 border-bottom'>
              <h5 className='mb-2 font-weight-bold'>Product Name</h5>
              <small className='d-list-item ml-3 mb-1'>
                Ice Jadeite / Spark Orange / Seabed Blue / Cloud White
              </small>
              <small className='d-list-item ml-3 mb-1'>
                6.6" Dot-in Display
              </small>
              <small className='d-list-item ml-3 mb-1'>
                128GB ROM + 4GB RAM
              </small>
              <small className='d-list-item ml-3 mb-1'>
                16MP AI Quad Camera with Quad Flash, Apeture F/1.8
              </small>
              <small className='d-list-item ml-3 '>5000mAh Battery</small>
            </div>
            <div className='pb-4'>
              <h6 className='mb-3 pl-4 font-weight-bold'>
                Specifications of Tecno Spark 5 Pro - 6.6" Dot Display - 4GB RAM
                - 128GB ROM - 16MP AI Quad Camera - 5000 mAh Battery
              </h6>
              <Row className='mx-0 pl-2'>
                <Col lg={6}>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small text-black-50'>Tecno</div>
                  </h6>
                </Col>
                <Col lg={6}>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small'>Tecno</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Fast Charging</small>
                    <div className='small'>NO</div>
                  </h6>
                  <h6 className='mb-2'>
                    <small className='text-black-50 mb-1'>Brand</small>
                    <div className='small text-black-50'>Tecno</div>
                  </h6>
                </Col>
              </Row>
            </div>
          </section>
          <section className='product-information mx-0 pb-4 bg-white '>
            <h6 className='bg-light py-3 pl-4 font-weight-bold mb-4'>
              Ratings of Tecno Spark 5 Pro - 6.6" Dot Display - 4GB RAM - 128GB
              ROM - 16MP AI Quad Camera - 5000 mAh Battery
            </h6>
            <Row className='mx-0'>
              <Col lg={3}>
                <h2 className='font-weight-bold mb-1'>
                  4.8
                  <small className='text-black-50 font-weight-bold'>/5</small>
                </h2>
                <div>
                  <span className='mr-2 text-warning'>
                    <StarFillIcon height={25} />
                  </span>
                  <span className='mr-2 text-warning'>
                    <StarFillIcon height={25} />
                  </span>
                  <span className='mr-2 text-warning'>
                    <StarFillIcon height={25} />
                  </span>
                  <span className='mr-2 text-warning'>
                    <StarFillIcon height={25} />
                  </span>
                  <span className='text-warning'>
                    <StarFillIcon height={25} />
                  </span>
                </div>
                <small className='text-black-50'>14 Ratings</small>
              </Col>
              <Col lg={4}>
                <Row className='mx-0 align-items-baseline'>
                  <div className='mr-4'>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                  </div>
                  <ProgressBar
                    animated
                    className='w-50'
                    variant='warning'
                    now={progressOne}
                    label={`${progressOne}%`}
                  />
                </Row>
                <Row className='mx-0 align-items-baseline'>
                  <div className='mr-4'>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                  </div>
                  <ProgressBar
                    animated
                    className='w-50'
                    variant='warning'
                    now={progressTwo}
                    label={`${progressTwo}%`}
                  />
                </Row>
                <Row className='mx-0 align-items-baseline'>
                  <div className='mr-4'>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                  </div>
                  <ProgressBar
                    animated
                    className='w-50'
                    variant='warning'
                    now={progressThree}
                    label={`${progressThree}%`}
                  />
                </Row>
                <Row className='mx-0 align-items-baseline'>
                  <div className='mr-4'>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                  </div>
                  <ProgressBar
                    animated
                    className='w-50'
                    variant='warning'
                    now={progressFour}
                    label={`${progressFour}%`}
                  />
                </Row>
                <Row className='mx-0 align-items-baseline'>
                  <div className='mr-4'>
                    <span className='mr-2 text-warning'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='mr-2 text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                    <span className='text-black-50'>
                      <StarFillIcon height={13} />
                    </span>
                  </div>
                  <ProgressBar
                    animated
                    className='w-50'
                    variant='warning'
                    now={progressFive}
                    label={`${progressFive}%`}
                  />
                </Row>
              </Col>
            </Row>
          </section>
        </MagnifierContainer>
      </Container>
    </>
  );
};

export default ProductView;
