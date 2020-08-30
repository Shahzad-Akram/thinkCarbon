import React from 'react';
import ReactSearchBox from 'react-search-box';
import './switch.styles.css';

import { Button, Navbar, Dropdown, DropdownButton, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  fadeIn,
  fadeInRightBig,
  fadeInLeftBig,
  fadeInUpBig,
} from 'react-animations';

import Radium, { StyleRoot } from 'radium';

// Icons
import SearchIcon from '../../assets/svgs/search';
import Cart3Icon from '../../assets/svgs/Cart3';

const HeaderNav = ({ onChange, children }) => {
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

  const data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ];

  return (
    <StyleRoot className='bg-white'>
      <Navbar
        className='col col-lg-10 mx-auto justify-content-between px-0 py-3 bg-white'
        expand='lg'
      >
        <Navbar.Brand as={Link} to='/' className='w-10 ml-2 ml-sm-5 mr-0'>
          <img
            height={85}
            style={styles.fadeIn}
            src='https://osp-server.s3.us-east-2.amazonaws.com/logo.png'
            className='d-inline-block align-top logo'
            alt='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='mr-3 border-0'
        />

        <Navbar.Collapse
          id='basic-navbar-nav'
          className='bg-white position-relative pb-3 pb-lg-0 '
        >
          <div
            className='row mx-0 justify-content-around align-items-center w-100'
            style={styles.fadeInRightBig}
          >
            <Col
              xs={10}
              lg={8}
              className='search-container d-flex align-items-center order-1 order-lg-0 px-0'
            >
              <ReactSearchBox
                inputBoxFontSize='12px'
                inputBoxHeight='28px'
                placeholder='Search for John, Jane or Mary'
                data={data}
                onSelect={(record) => console.log(record)}
                onFocus={() => {
                  console.log('This function is called when is focussed');
                }}
                onChange={(value) => console.log(value)}
                fuseConfigs={{
                  threshold: 0.05,
                }}
              />
              <Button
                variant='success'
                className='py-1 px-2 d-flex align-items-center rounded-0'
              >
                <SearchIcon />
              </Button>
              <Button variant='link' className='p-0 ml-4'>
                <Cart3Icon />
              </Button>
            </Col>
            {/* 
            <div className='d-flex align-items-center'>
              <label className='switch my-2'>
                <input type='checkbox' onChange={onChange} />
                <span className='slider round'></span>
              </label>
              <small className='ml-3 text-green-light filter-invert'>
                {children}
              </small>
            </div> */}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </StyleRoot>
  );
};

export default HeaderNav;
