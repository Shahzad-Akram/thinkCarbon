import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterInformation = () => (
  <Container
    fluid
    className='Footer-information px-0 py-4 text-black-50 bg-light'
  >
    <Row className='categories-container mx-0 justify-content-center'>
      <Col md={3}>
        <div className='d-flex flex-column mb-3'>
          <h6 className='font-weight-bold mb-3'>
            How Daraz Transformed Online Shopping in Pakistan
          </h6>
          <p className='small '>
            <small>
              Daraz first made waves in Pakistan’s e-commerce market after its
              introduction in 2012. We have since grown to become Pakistan’s
              largest platform for online shopping with a network spread across
              Asia in Pakistan Bangladesh, Sri Lanka, Myanmar, and
              <Link to='/' className='px-1'>
                Daraz.com.np
              </Link>
              . Our vision was to provide a safe, efficient online marketplace
              platform for vendors and customers across the country to come
              together. We started off exclusively as an online fashion retail
              platform and over the years expanded to become a complete one-stop
              solution for all your buying needs. Daraz prides itself on not
              being just another ecommerce venture in Asia. We work tirelessly
              to make sure that we provide users with the best online online
              shopping experience and value for their purchases. Whether you
              shop online through our website or our online shopping mobile App,
              you can expect easy navigation, customized recommendations, and a
              smooth online shopping experience guaranteed.
            </small>
          </p>
        </div>
        <div className='d-flex flex-column mb-3'>
          <h6 className='font-weight-bold mb-3 small'>
            What Makes Us Different from Other Online Shopping Platforms?
          </h6>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>
                Select from the Largest Online Marketplace in Pakistan
              </div>
              With over 3 million products to select from, Daraz offers its
              customers the most comprehensive listing of products in the
              country. Whether you’re looking for electronics, apparel,
              appliances, or groceries – there is something for everyone.
            </small>
          </p>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door. We cater to both major
              and smaller cities alike, and give you the choice to track your
              package as it makes its way to you so you always know your order
              status. If you are unsatisfied with any aspect of your order, we
              have a simple 7-day return or exchange policy.
            </small>
          </p>
        </div>
      </Col>
      <Col md={2}>
        <div className='d-flex flex-column mb-3'>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door. We cater to both major
              and smaller cities alike, and give you the choice to track your
              package as it makes its way to you so you always know your order
              status. If you are unsatisfied with any aspect of your order, we
              have a simple 7-day return or exchange policy.
            </small>
          </p>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door. We cater to both major
              and smaller cities alike, and give you the choice to track your
              package as it makes its way to you so you always know your order
              status. If you are unsatisfied with any aspect of your order, we
              have a simple 7-day return or exchange policy.
            </small>
          </p>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door. We cater to both major
              and smaller cities alike, and give you the choice to track your
              package as it makes its way to you so you always know your order
              status. If you are unsatisfied with any aspect of your order, we
              have a simple 7-day return or exchange policy.
            </small>
          </p>
        </div>
      </Col>
      <Col md={3}>
        <div className='d-flex flex-column mb-3'>
          <h6 className='font-weight-bold mb-3'>Top Categories & Brands</h6>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door. We cater to both major
              and smaller cities alike, and give you the choice to track your
              package as it makes its way to you so you always know your order
              status. If you are unsatisfied with any aspect of your order, we
              have a simple 7-day return or exchange policy.
            </small>
          </p>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door. We cater to both major
              and smaller cities alike, and give you the choice to track your
              package as it makes its way to you so you always know your order
              status. If you are unsatisfied with any aspect of your order, we
              have a simple 7-day return or exchange policy.
            </small>
          </p>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door.
            </small>
          </p>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door.
            </small>
          </p>
          <p className='small  mb-3'>
            <small>
              <div className='font-weight-bold'>Hassle Free Delivery</div>
              Online shopping is only as good as its execution and Daraz
              promises hassle free delivery right from the moment you order to
              when your package is dropped at your door.
            </small>
          </p>
        </div>
      </Col>
      <Col md={3}>
        <div className='d-flex flex-column mb-3 small'>
          <h6 className='mb-0'>
            <small className='font-weight-bold'>Customer Care</small>
          </h6>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Track Your Daraz Order</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>
              Corporate & Bulk Purchasing
            </small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Track Your Daraz Order</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>
              Corporate & Bulk Purchasing
            </small>
          </Link>
        </div>
        <div className='d-flex flex-column mb-3 small'>
          <h6 className='mb-0'>
            <small className='font-weight-bold'>Customer Care</small>
          </h6>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Track Your Daraz Order</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>
              Corporate & Bulk Purchasing
            </small>
          </Link>
        </div>
        <div className='d-flex flex-column mb-3 small'>
          <h6 className='mb-0'>
            <small className='font-weight-bold'>Customer Care</small>
          </h6>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
        </div>
        <div className='d-flex flex-column mb-3 small'>
          <h6 className='mb-0'>
            <small className='font-weight-bold'>Customer Care</small>
          </h6>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
        </div>
        <div className='d-flex flex-column mb-3 small'>
          <h6 className='mb-0'>
            <small className='font-weight-bold'>Customer Care</small>
          </h6>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>How to Buy</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Track Your Daraz Order</small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>
              Corporate & Bulk Purchasing
            </small>
          </Link>
          <Link to='/'>
            <small className='font-weight-normal'>Help Center</small>
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

export default FooterInformation;
