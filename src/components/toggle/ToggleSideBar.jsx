import React, { useState } from 'react';
import { Button, Collapse, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FilterIcon from '../../assets/svgs/Filter';

export default function ToggleSideBar({ children, id, className }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse className={className} in={open}>
        <div id={id}>{children}</div>
      </Collapse>
      <Row className='mx-0'>
        <Col className='pb-2 mb-2'>
          <h4 className='mb-0'>
            <small className='font-weight-bold'>Related Categories</small>
          </h4>
          <Button
            as={Link}
            to='/mobiles'
            className='p-0'
            variant='link'
            size='sm'
          >
            <h5 className='mb-0'>
              <small className='font-weight-bold'>Mobiles</small>
            </h5>
          </Button>
        </Col>
        <Col xs={3} md={2}>
          <Button
            variant='outline-success'
            className='btn-block d-flex p-1'
            onClick={() => setOpen(!open)}
            aria-controls={id}
            aria-expanded={open}
          >
            <small className='w-100 text-center'>
              <FilterIcon height={20} />
            </small>
          </Button>
        </Col>
      </Row>
    </>
  );
}
