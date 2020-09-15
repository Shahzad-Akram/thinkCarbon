import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Carousel,
  Button,
  Row,
  Col,
  ListGroup,
  Container,
} from 'react-bootstrap';
import MenuItem from '../menu-item/menu-item';

//  Banners
import Banner1 from '../../assets/banners/banner-1.jpeg';
import Banner2 from '../../assets/banners/banner-2.jpeg';
import Banner3 from '../../assets/banners/banner-3.jpeg';
import Banner4 from '../../assets/banners/banner-4.jpg';
import Banner5 from '../../assets/banners/banner-5.jpg';
import Banner6 from '../../assets/banners/banner-6.jpg';
import Banner7 from '../../assets/banners/banner-7.jpg';
import Banner8 from '../../assets/banners/banner-8.jpg';

const SectionOne = () => {
  //  Item Col
  const [isItems1, setIsItems1] = useState(false);

  // Link Col
  const [isLink1, setIsLink1] = useState(false);

  const products = useSelector((state) => state.products);
  let categories = [];
  let selected = [];

  if (products !== null) {
    categories = products.data.products.map((product) => product.category);
  }
  for (let i = 0; i < categories.length; i++) {
    if (selected.indexOf(categories[i]) === -1) {
      selected.push(categories[i]);
    }
  }

  return (
    <div className='Section-1 mb-3' onMouseLeave={() => setIsItems1(false)}>
      <Container className='px-0 position-relative d-none d-md-flex'>
        <Row
          className='mx-0 menu-container'
          onMouseLeave={() => setIsLink1(false)}
        >
          {/* Menu-Col-1 */}

          <ListGroup className='h-100 bg-white small rounded-0 border-right'>
            <MenuItem
              itemName='Electronic Devices 1'
              onMouseEnter={() => setIsItems1(true)}
            />
          </ListGroup>

          {/* Menu-Col-1-End */}
          {/* Menu-Col-2 */}

          {isItems1 && (
            <ListGroup className='h-100 bg-white small rounded-0 border-right'>
              {selected.map((category) => (
                <MenuItem
                  link={`/mobiles/${category}`}
                  itemName={category}
                  onMouseEnter={() => setIsLink1(true)}
                />
              ))}
            </ListGroup>
          )}

          {/* Menu-Col-2-End */}
          {/* Menu-Col-3 */}

          {isLink1 && (
            <ListGroup className='h-100 bg-white small rounded-0 border-right'>
              <MenuItem link='/mobiles' itemName='Mobiles' />
              <MenuItem link='/' itemName='Option-2' />
            </ListGroup>
          )}

          {/* Menu-Col-3-End */}
        </Row>
      </Container>
      <Carousel>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `RGB(242, 242, 242)`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner1} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `RGB(11, 95, 131)`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner2} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `RGB(237, 246, 251)`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner3} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `RGB(78, 62, 55)`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner4} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `RGB(124, 132, 51)`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner5} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `RGB(247, 247, 247)`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner6} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `RGB(105, 129, 68)`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner7} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `#105304`,
            }}
          >
            <Col lg={9} className='ml-auto p-0 d-flex justify-content-end'>
              <Container className='d-flex flex-column-reverse flex-lg-row px-0'>
                <Col lg={4} className='px-0'>
                  <Carousel.Caption
                    className='text-center d-flex flex-column justify-content-center h-100 p-3 mb-5 mb-lg-0 rounded-lg'
                    style={{
                      backgroundColor: `rgb(0 0 0 / 20%)`,
                      color: '#f9fcfd',
                    }}
                  >
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                    <Button
                      variant='success'
                      className='mt-3 mb-3 mb-lg-0 py-2 w-50 mx-auto'
                    >
                      Button
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col className='px-0'>
                  <img className='image-size' src={Banner8} alt='slide' />
                </Col>
              </Container>
            </Col>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SectionOne;
