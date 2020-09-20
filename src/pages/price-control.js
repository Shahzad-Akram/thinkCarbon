import React from 'react';
import {
    Container,
    Button,
    Row,
    Col,
    Form,
    Pagination,
    Spinner,
  } from 'react-bootstrap';

 const pricecontrol = () => {
    return (
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
                            {/* <PlayFillIcon /> */}
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
    )
}
export default pricecontrol;