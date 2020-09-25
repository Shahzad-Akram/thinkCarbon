import React from 'react';
import Sidebar1 from './sidebar1';
import CheckBox from '../../components/check-box/check-box';
import StarFillIcon from '../../assets/svgs/Star-fill';
import StarIcon from '../../assets/svgs/Star';
import { Row, Form, Col, Button } from 'react-bootstrap';
import PlayFillIcon from '../../assets/svgs/PlayFill';
import ToggleViewMore from '../../components/toggle/ToggleViewMore';

const Filter = () => {
    return (
        <main>

            {/* Section-Check-Box */}
            <section>
                <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                    <div className='small mb-2'>
                        <small className='font-weight-bold'>Service</small>
                    </div>
                    <Sidebar1 type="category" />

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
    )
}

export default Filter;