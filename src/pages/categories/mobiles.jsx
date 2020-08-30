import React from 'react';
import './categories.styles.css';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
// Icons

import ChevronRightIcon from '../../assets/svgs/ChevronRight';
import SaleItem from '../../components/saleItem/saleItem';
import StarFillIcon from '../../assets/svgs/Star-fill';
import StarHalfFillIcon from '../../assets/svgs/Star-half-fill';
import StarIcon from '../../assets/svgs/Star';
import CheckBox from '../../components/check-box/check-box';
import PlayFillIcon from '../../assets/svgs/PlayFill';
import ToggleSideBar from '../../components/toggle/ToggleSideBar';
import ToggleViewMore from '../../components/toggle/ToggleViewMore';

const Mobiles = () => {
  return (
    <Container fluid className='categories-container px-0 mt-3 mb-5'>
      <Container className='px-0'>
        <div className='d-flex align-items-baseline categories-nav border-bottom pb-2'>
          <Button variant='link' as={Link} className='p-0' to='/'>
            <small>Home</small>
          </Button>
          <span className='mx-2 text-white'>
            <ChevronRightIcon />
          </span>
          <Button variant='link' as={Link} className='p-0' to='/'>
            <small>Mobiles & Tablets</small>
          </Button>
          <span className='mx-2 text-white'>
            <ChevronRightIcon />
          </span>
          <Button variant='link' className='p-0' disabled>
            <small> Mobiles</small>
          </Button>
        </div>
        <Row className='Section-2 categories-nav-brand mx-0 mt-3 mb-4 flex-column overflow-auto'>
          <Col
            xs={4}
            lg={2}
            as={Link}
            to='/'
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
            as={Link}
            to='/'
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
            as={Link}
            to='/'
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
            as={Link}
            to='/'
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
            as={Link}
            to='/'
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
            as={Link}
            to='/'
            className='px-0 d-flex justify-content-center align-items-center bg-white border rounded flex-fill'
          >
            <img
              height={80}
              src='https://static-01.daraz.pk/brand/qmobile_b4f65b4bef2af085a10af3144f84cd3a.jpg'
              alt='brand'
            />
          </Col>
        </Row>
      </Container>
      <Container className='px-0'>
        <Row className='bg-white mx-0 rounded'>
          <Col lg={2} className='categories-side-bar p-3 mr-1 shadow-sm'>
            <main className='d-none d-lg-block'>
              <section className='border-bottom pb-2 mb-2'>
                <div className='small'>
                  <small className='font-weight-bold'>Related Categories</small>
                </div>
                <Button
                  as={Link}
                  to='/mobiles'
                  className='p-0'
                  variant='link'
                  size='sm'
                >
                  <small>Mobiles</small>
                </Button>
              </section>
              {/* Section-Check-Box */}
              <section>
                <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                  <div className='small mb-2'>
                    <small className='font-weight-bold'>Service</small>
                  </div>
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <ToggleViewMore id='one'>
                    <div className='d-flex flex-column'>
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                    </div>
                  </ToggleViewMore>
                </div>
              </section>
              <section>
                <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                  <div className='small mb-2'>
                    <small className='font-weight-bold'>Location</small>
                  </div>
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                </div>
              </section>

              <section>
                <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                  <div className='small mb-2'>
                    <small className='font-weight-bold'>Brand</small>
                  </div>
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                  <CheckBox itemName='nokia' />
                </div>

                <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                  <div className='small mb-2'>
                    <small className='font-weight-bold'>Price</small>
                  </div>
                  <Form>
                    <Row className='mx-0 justify-content-between'>
                      <Col xs={4} className='px-0'>
                        <Form.Control
                          size='sm'
                          type='number'
                          placeholder='Min'
                        />
                      </Col>
                      -
                      <Col xs={4} className='px-0'>
                        <Form.Control
                          size='sm'
                          type='number'
                          placeholder='Max'
                        />
                      </Col>
                      <Col xs={2} className='px-0'>
                        <Button
                          className='d-flex px-2'
                          variant='success'
                          type='submit'
                        >
                          <PlayFillIcon />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>

                <div className='d-flex flex-column pb-2 mb-2'>
                  <div className='small mb-2'>
                    <small className='font-weight-bold'>Rating</small>
                  </div>
                  <span className='d-flex align-items-baseline mb-1'>
                    <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                    </span>
                  </span>
                  <span className='d-flex align-items-baseline'>
                    <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarIcon height={13} />
                    </span>
                    <small>
                      <small className='text-capitalize'>and up</small>
                    </small>
                  </span>
                  <span className='d-flex align-items-baseline'>
                    <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarIcon height={13} />
                      <StarIcon height={13} />
                    </span>
                    <small>
                      <small className='text-capitalize'>and up</small>
                    </small>
                  </span>
                  <span className='d-flex align-items-baseline'>
                    <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                      <StarFillIcon height={13} />
                      <StarFillIcon height={13} />
                      <StarIcon height={13} />
                      <StarIcon height={13} />
                      <StarIcon height={13} />
                    </span>
                    <small>
                      <small className='text-capitalize'>and up</small>
                    </small>
                  </span>
                  <span className='d-flex align-items-baseline'>
                    <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                      <StarFillIcon height={13} />
                      <StarIcon height={13} />
                      <StarIcon height={13} />
                      <StarIcon height={13} />
                      <StarIcon height={13} />
                    </span>
                    <small>
                      <small className='text-capitalize'>and up</small>
                    </small>
                  </span>
                </div>
              </section>
              {/* Section-Check-Box-End */}
            </main>
            {/* Toggle */}
            <div className='d-lg-none'>
              <ToggleSideBar
                id='Side-bar'
                className='d-lg-none side-bar-toggle h4 mb-0 shadow-sm ml-n3 p-2'
              >
                <main>
                  {/* Section-Check-Box */}
                  <section>
                    <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                      <div className='small mb-2'>
                        <small className='font-weight-bold'>Service</small>
                      </div>
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <ToggleViewMore id='one'>
                        <div className='d-flex flex-column'>
                          <CheckBox itemName='nokia' />
                          <CheckBox itemName='nokia' />
                          <CheckBox itemName='nokia' />
                          <CheckBox itemName='nokia' />
                          <CheckBox itemName='nokia' />
                          <CheckBox itemName='nokia' />
                        </div>
                      </ToggleViewMore>
                    </div>
                  </section>
                  <section>
                    <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                      <div className='small mb-2'>
                        <small className='font-weight-bold'>Location</small>
                      </div>
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                    </div>
                  </section>

                  <section>
                    <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                      <div className='small mb-2'>
                        <small className='font-weight-bold'>Brand</small>
                      </div>
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                      <CheckBox itemName='nokia' />
                    </div>

                    <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                      <div className='small mb-2'>
                        <small className='font-weight-bold'>Price</small>
                      </div>
                      <Form>
                        <Row className='mx-0 justify-content-between'>
                          <Col xs={4} className='px-0'>
                            <Form.Control
                              size='sm'
                              type='number'
                              placeholder='Min'
                            />
                          </Col>
                          -
                          <Col xs={4} className='px-0'>
                            <Form.Control
                              size='sm'
                              type='number'
                              placeholder='Max'
                            />
                          </Col>
                          <Col xs={2} className='px-0'>
                            <Button
                              className='d-flex px-2'
                              variant='success'
                              type='submit'
                            >
                              <PlayFillIcon />
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>

                    <div className='d-flex flex-column pb-2 mb-2'>
                      <div className='small mb-2'>
                        <small className='font-weight-bold'>Rating</small>
                      </div>
                      <span className='d-flex align-items-baseline mb-1'>
                        <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                        </span>
                      </span>
                      <span className='d-flex align-items-baseline'>
                        <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarIcon height={13} />
                        </span>
                        <small>
                          <small className='text-capitalize'>and up</small>
                        </small>
                      </span>
                      <span className='d-flex align-items-baseline'>
                        <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarIcon height={13} />
                          <StarIcon height={13} />
                        </span>
                        <small>
                          <small className='text-capitalize'>and up</small>
                        </small>
                      </span>
                      <span className='d-flex align-items-baseline'>
                        <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                          <StarFillIcon height={13} />
                          <StarFillIcon height={13} />
                          <StarIcon height={13} />
                          <StarIcon height={13} />
                          <StarIcon height={13} />
                        </span>
                        <small>
                          <small className='text-capitalize'>and up</small>
                        </small>
                      </span>
                      <span className='d-flex align-items-baseline'>
                        <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                          <StarFillIcon height={13} />
                          <StarIcon height={13} />
                          <StarIcon height={13} />
                          <StarIcon height={13} />
                          <StarIcon height={13} />
                        </span>
                        <small>
                          <small className='text-capitalize'>and up</small>
                        </small>
                      </span>
                    </div>
                  </section>
                  {/* Section-Check-Box-End */}
                </main>
              </ToggleSideBar>
            </div>
          </Col>
          <Col className='p-3'>
            <div>
              <div>
                <h5 className='mb-2'>New Mobile Prices in Pakistan 2020</h5>
                <small>1972 items found in Mobiles</small>
              </div>
            </div>
            <Row className='Section-2 mx-0 mb-4 flex-nowrap flex-lg-wrap overflow-auto row-cols-2 row-cols-md-3'>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  priceMinus='Rs.11,445'
                  priceDiscount='-83%'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                        </span>
                        <small>(1)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>

                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/94a3abbf86a3d16248a0908ba49e31d9.jpg'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
              <Col lg={3} className='d-flex px-0  mb-3'>
                <SaleItem
                  photo='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                  itemName='Tecno Pouvoir 4 Pro || 6GB Ram 128GB Rom || 6000mAh Battey || 7 Inch Display'
                  price='Rs.539'
                  available='Installment available'
                >
                  <div className='order-first mb-2'>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                    <span className='border border-success pb-1 mr-1'>
                      <img
                        height={25}
                        src='https://static-01.daraz.pk/p/84f5e8baec827c33bc8c4ed55ff786ee.png'
                        alt='item'
                      />
                    </span>
                  </div>
                  <div className='text-muted small'>
                    <small className='d-flex justify-content-between align-items-center'>
                      <span>
                        <span className='text-warning mr-1'>
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarFillIcon height={10} />
                          <StarHalfFillIcon height={10} />
                          <StarIcon height={10} />
                        </span>
                        <small>(60)</small>
                      </span>
                      <span>Pakistan</span>
                    </small>
                  </div>
                  <Button
                    className='Sale-item-btn-cart mt-2 mx-2'
                    variant='success'
                    size='sm'
                  >
                    <small>ADD TO CART</small>
                  </Button>
                </SaleItem>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Mobiles;