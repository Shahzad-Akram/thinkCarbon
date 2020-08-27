import React from 'react';
import './switch.styles.css';

import { Button, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  fadeIn,
  fadeInRightBig,
  fadeInLeftBig,
  fadeInUpBig,
} from 'react-animations';

import Radium, { StyleRoot } from 'radium';

const HeaderNav = ({ onChange }) => {
  const styles = {
    fadeInUpBig: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig'),
    },
    fadeIn: {
      animation: 'x 5s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    },
    fadeInRightBig: {
      animation: 'x 1.5s',
      animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig'),
    },
    fadeInLeftBig: {
      animation: 'x 1.5s',
      animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
    },
  };

  return (
    <StyleRoot className='bg-white'>
      <Navbar className='col-10 mx-auto justify-content-between px-0 py-4 bg-white'>
        <Navbar.Brand
          as={Link}
          to='/'
          className='ml-2 ml-sm-5 mr-0 d-none d-sm-block'
        >
          <img
            height={100}
            style={styles.fadeIn}
            src='https://osp-server.s3.us-east-2.amazonaws.com/logo.png'
            className='d-inline-block align-top logo'
            alt='logo'
          />
        </Navbar.Brand>
        <div
          className='row mx-0 justify-content-around align-items-center'
          style={styles.fadeInRightBig}
        >
          <Button
            className='text-capitalize mr-3'
            variant='link'
            as={Link}
            to='/'
          >
            <small className='font-weight-bold'> Home</small>
          </Button>
          <Button
            className='text-capitalize mr-3'
            variant='link'
            as={Link}
            to='/product'
          >
            <small className='font-weight-bold'> Product</small>
          </Button>
          <Button
            className='text-capitalize mr-2 mr-sm-5'
            variant='link'
            as={Link}
            to='/about'
          >
            <small className='font-weight-bold'> About</small>
          </Button>

          <div className='mr-2 mr-sm-5'>
            <label className='switch my-2'>
              <input type='checkbox' onChange={onChange} />
              <span className='slider round'></span>
            </label>
            {/* <small>{dark ? 'Dark' : 'Light'}</small> */}
          </div>

          <DropdownButton
            id='dropdown-basic-button'
            title='Language'
            variant='success'
            className='d-inline mx-auto mr-md-5'
          >
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Español</Dropdown.Item>
          </DropdownButton>
        </div>
      </Navbar>
    </StyleRoot>
  );
};

export default HeaderNav;
