import React, { useState } from 'react';
import { Carousel, Button, Row, Col, ListGroup } from 'react-bootstrap';
import MenuItem from '../menu-item/menu-item';

const SectionOne = () => {
  //  Item Col
  const [isItems1, setIsItems1] = useState(false);

  // Link Col
  const [isLink1, setIsLink1] = useState(false);

  //

  return (
    <div
      className='Section-1 position-relative mb-3'
      onMouseLeave={() => setIsItems1(false)}
    >
      <Row
        className='mx-0 menu-container h-100 d-none d-md-flex'
        onMouseLeave={() => setIsLink1(false)}
      >
        {/* Menu-Col-1 */}
        <Col md={4} lg={3} xl={4} className='px-0'>
          <ListGroup className='h-100 bg-white small rounded-0'>
            <MenuItem
              itemName='Electronic Devices 1'
              onMouseEnter={() => setIsItems1(true)}
            />
          </ListGroup>
        </Col>
        {/* Menu-Col-1-End */}
        {/* Menu-Col-2 */}
        <Col md={4} lg={3} xl={4} className='px-0'>
          {isItems1 && (
            <ListGroup className='h-100 bg-white small rounded-0 nk-shadow-box-1'>
              <MenuItem
                itemName='Electronic Devices 1'
                onMouseEnter={() => setIsLink1(true)}
              />
              <MenuItem itemName='Electronic Devices 2' />
              <MenuItem itemName='Electronic Devices 3' />
              <MenuItem itemName='Electronic Devices 4' />
            </ListGroup>
          )}
        </Col>
        {/* Menu-Col-2-End */}
        {/* Menu-Col-3 */}
        <Col md={4} lg={3} xl={4} className='px-0'>
          {isLink1 && (
            <ListGroup className='h-100 bg-white small rounded-0 nk-shadow-box-1'>
              <MenuItem link='/' itemName='Option-1' />
              <MenuItem link='/' itemName='Option-2' />
            </ListGroup>
          )}
        </Col>
        {/* Menu-Col-3-End */}
      </Row>

      <Carousel>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `rgb(126, 200, 246)`,
            }}
          >
            <Button variant='link' className='mx-auto p-0'>
              <img
                className='image-size'
                src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1_JCBRRr0gK0jSZFnXXbRRXXa.png_2200x2200Q100.jpg_.webp'
                alt='First slide'
              />
            </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `rgb(60, 127, 184)`,
            }}
          >
            <Button variant='link' className='mx-auto p-0'>
              <img
                className='image-size'
                src='https://laz-img-cdn.alicdn.com/images/ims-web/TB10HWBRRr0gK0jSZFnXXbRRXXa.png_2200x2200Q100.jpg_.webp'
                alt='Third slide'
              />
            </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-flex'
            style={{
              backgroundColor: `rgb(251, 200, 2)`,
            }}
          >
            <Button variant='link' className='mx-auto p-0'>
              <img
                className='image-size'
                src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1m6H9d9slXu8jSZFuXXXg7FXa.jpg_2200x2200Q100.jpg_.webp'
                alt='Third slide'
              />
            </Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SectionOne;
