import React from 'react'
import { Button } from 'react-bootstrap';
import ChevronRightIcon from '../../assets/svgs/ChevronRight';
import { Link, useParams } from 'react-router-dom';

 const Topbar = () => {
    return (
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
    )
}
export default Topbar