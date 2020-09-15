import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const SectionHero = () => {
  return (
    <Container className='px-0 mb-3'>
      <Row className='mx-0 bg-white flex-column-reverse flex-lg-row'>
        <Col lg={5} className='px-0'>
          <div
            className='d-flex justify-content-center align-items-center mb-4'
            style={{
              backgroundImage: `url(https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg)`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              height: '400px',
            }}
          >
            <Col
              xs={9}
              className='p-3 border border-primary text-center text-primary'
              style={{
                backgroundColor: `rgb(1 14 27 / 50%)`,
              }}
            >
              <h4 className='font-weight-bold border-bottom border-primary pb-2'>
                GREEN SHOPPING
              </h4>
              <h6 className='mb-3'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h6>
              <Button variant='outline-primary' className='font-weight-bold'>
                Show Now
              </Button>
            </Col>
          </div>
          <div
            className='d-flex justify-content-center align-items-end pb-3'
            style={{
              backgroundImage: `url(https://image.freepik.com/free-photo/solar-panel-with-blue-sky-sunset-concept-clean-energy-electric-alternative-power-nature_34152-1985.jpg)`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              height: '200px',
            }}
          >
            <Col
              xs={9}
              className='p-3 border border-primary text-center text-primary'
              style={{
                backgroundColor: `rgb(1 14 27 / 50%)`,
              }}
            >
              <h5 className='font-weight-bold mb-3'>GREEN SHOPPING</h5>

              <Button
                variant='outline-primary'
                className='font-weight-bold py-0'
              >
                Show Now
              </Button>
            </Col>
          </div>
        </Col>
        <Col className='pl-0 pl-lg-4 pr-0 mb-4 mb-lg-0'>
          <div
            className='d-flex justify-content-center align-items-end pb-5'
            style={{
              backgroundImage: `url(https://osp-server.s3.us-east-2.amazonaws.com/hydro.jpg)`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              height: '625px',
            }}
          >
            <Col
              xs={9}
              className='p-2 text-center text-white'
              style={{
                backgroundColor: `rgb(1 14 27 / 50%)`,
              }}
            >
              <div className='border border-light py-2'>
                <h1 className='font-weight-bold mb-3'>GREEN SHOPPING</h1>
                <h6 className='mb-3'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h6>
                <Button
                  block
                  variant='outline-light'
                  className='font-weight-bold mb-3 px-0 w-75 mx-auto'
                >
                  Show Now
                </Button>
                <h6>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h6>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHero;
