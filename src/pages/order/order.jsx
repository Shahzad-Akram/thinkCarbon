import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import { Container, ProgressBar, Row, Col, Collapse, Button } from 'react-bootstrap';
import ChevronDownIcon from '../../assets/svgs/ChevronDown';
import ChevronUpIcon from '../../assets/svgs/ChevronUp';
import OrderIcon from '../../assets/svgs/Order';

const Order = () => {
    const [open, setOpen] = useState(true);
    const [opentwo, setOpenTwo] = useState(false);

    return (
        <>
            <Container className='py-5'>
                <div className='d-flex align-items-baseline mb-2'>
                    <OrderIcon height={25} color='#fff' />
                    <h6 className='text-white ml-2'>My orders</h6>
                </div>
                <section className='bg-white mb-3'>
                    <Row className='mx-0 small p-4 justify-content-between'>
                        <div className='mb-3 mr-5 mr-lg-0'>
                            <h5 className='font-weight-bold mb-1'>Order 1</h5>
                            <div className='text-muted'>Agent: sample Agent</div>
                            <div className='text-muted'>Task: buy property</div>
                        </div>
                        <Col lg={3} className='px-0 order-last order-lg-0 mb-3'>
                            <h6 className='font-weight-bold mb-1'>Complete</h6>
                            <h5 className='font-weight-bold mb-1'>45%</h5>
                            <ProgressBar variant="success" now={45} />
                        </Col>
                        <div className='font-weight-bold mb-3'>
                            <h6 className='font-weight-bold mb-1'>Expected Completion</h6>
                            <div>Oct 12, 2019</div>
                            <div className='text-muted'>15 Days</div>
                        </div>
                    </Row>
                    <Collapse in={open} className='pb-3 position-static'>
                        <div id="one">
                            <Stepper size={25} circleFontSize={10} titleFontSize={10} completeColor='rgba(92, 234, 124)' activeColor='rgba(92, 234, 124)'
                                defaultBarColor='rgba(92, 234, 124)' completeBarColor='rgba(92, 234, 124)'
                                steps={[{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' },
                                { title: 'Step Four' }, { title: 'Step Four' }, { title: 'Step Four' }]} activeStep={3} />
                        </div>
                    </Collapse>
                    <div className='bg-white d-flex justify-content-center pb-2'>
                        <Button
                            variant='link'
                            className='bg-white'

                            onClick={() => setOpen(!open)}
                            aria-controls="one"
                            aria-expanded={open}
                        >
                            <span
                                className={
                                    open
                                        ? 'd-none'
                                        : 'd-inline-block'
                                }
                            >
                                <small className='mr-2'>Expand</small>
                                <ChevronDownIcon />
                            </span>
                            <span
                                className={
                                    open
                                        ? 'd-inline-block'
                                        : 'd-none'
                                }
                            >
                                <small className='mr-2'>Minimize</small>
                                <ChevronUpIcon />
                            </span>
                        </Button>
                    </div>
                </section>
                <section className='bg-white mb-3'>
                    <Row className='mx-0 small p-4 justify-content-between'>
                        <div className='mb-3 mr-5 mr-lg-0'>
                            <h5 className='font-weight-bold mb-1'>Order 2</h5>
                            <div className='text-muted'>Agent: sample Agent</div>
                            <div className='text-muted'>Task: buy property</div>
                        </div>
                        <Col lg={3} className='px-0 order-last order-lg-0 mb-3'>
                            <h6 className='font-weight-bold mb-1'>Complete</h6>
                            <h5 className='font-weight-bold mb-1'>75%</h5>
                            <ProgressBar variant="success" now={75} />
                        </Col>
                        <div className='font-weight-bold mb-3'>
                            <h6 className='font-weight-bold mb-1'>Expected Completion</h6>
                            <div>Oct 12, 2019</div>
                            <div className='text-muted'>15 Days</div>
                        </div>
                    </Row>
                    <Collapse in={opentwo} className='pb-3 position-static'>
                        <div id="two">
                            <Stepper size={25} circleFontSize={10} titleFontSize={10} completeColor='rgba(92, 234, 124)' activeColor='rgba(92, 234, 124)'
                                defaultBarColor='rgba(92, 234, 124)' completeBarColor='rgba(92, 234, 124)'
                                steps={[{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' },
                                { title: 'Step Four' }, { title: 'Step Four' }, { title: 'Step Four' }]} activeStep={4} />
                        </div>
                    </Collapse>
                    <div className='bg-white d-flex justify-content-center pb-2'>
                        <Button
                            variant='link'
                            className='bg-white'

                            onClick={() => setOpenTwo(!opentwo)}
                            aria-controls="two"
                            aria-expanded={opentwo}
                        >
                            <span
                                className={
                                    opentwo
                                        ? 'd-none'
                                        : 'd-inline-block'
                                }
                            >
                                <small className='mr-2'>Expand</small>
                                <ChevronDownIcon />
                            </span>
                            <span
                                className={
                                    opentwo
                                        ? 'd-inline-block'
                                        : 'd-none'
                                }
                            >
                                <small className='mr-2'>Minimize</small>
                                <ChevronUpIcon />
                            </span>
                        </Button>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Order;