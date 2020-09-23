import React, { useState, useEffect } from 'react';
import ReactSearchBox from 'react-search-box';
import Select from 'react-select'
import './switch.styles.css';
import './menu-list.styles.css';

import { Button, Navbar, Col, ListGroup, Row } from 'react-bootstrap';
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
import MenuItem from '../menu-item/menu-item';
import { getProducts } from '../../actions/index';
import {useSelector} from 'react-redux'


const HeaderNav = ({ onChange, children }) => {
  const products = useSelector((state) => state.products);
 
  const [isItems1, setIsItems1] = useState(false);
  const [isItems2, setIsItems2] = useState(false);
  const [isLink1, setIsLink1] = useState(false);
  const [option, SetOption] = useState([
    { value: 'chocolate'  },
  { value: 'strawberry' },
  { value: 'vanilla' }

])

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
  
  const formatLabel = ({value}) =>
  {
   const name = value;
  
    const label = <div> {value}   </div>
   return label;
 }
 const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

  // useEffect(() => {
  //   if(products !== null){
  //     SetOption(products.data.products)
  //     console.log(option)
  //   }
  
  // }, [products]);

 

  return (
    <StyleRoot className='bg-white'>
      {console.log(option)}
      <Navbar
        className='container px-0 mx-auto justify-content-between px-0 py-3 bg-white'
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
          className='bg-white position-relative py-2 py-lg-0 '
        >
          <div
            className='row mx-0 px-2 px-sm-0 justify-content-sm-around align-items-center w-100'
            style={styles.fadeInRightBig}
          >
            <Button
              variant='outline-success'
              className='py-0 px-2 d-flex order-last order-sm-first mt-2 mt-sm-0'
              onMouseEnter={() => setIsItems1(true)}
            >
              <small> Categories</small>
            </Button>
            <Col
              xs={10}
              lg={8}
              className='search-container d-flex align-items-center order-1 order-lg-0 px-0'
            >
              <Select  options={option} styles ={customStyles} optionRenderer={ formatLabel } valueRenderer={formatLabel}  />
              {/* <ReactSearchBox
                inputBoxFontSize='12px'
                inputBoxHeight='28px'
                placeholder='Search for John, Jane or Mary'
                data={option}
                onSelect={(record) => console.log(record)}
                onFocus={() => {
                  console.log('This function is called when is focussed');
                }}
                onChange={(value) => console.log(value)}
                fuseConfigs={{
                  threshold: 0.05,
                }}
              /> */}
              <Button
                variant='success'
                className='py-1 px-2 d-flex align-items-center rounded-0'
              >
                <SearchIcon />
              </Button>
              <Button as={Link} to='/cart' variant='link' className='p-0 ml-4'>
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
      {isItems1 && (
        <Row
          className='menu-list mx-0  col col-md-10 col-lg-9 col-xl-6'
          onMouseLeave={() => setIsItems1(false)}
        >
          <Col xs={6} md={4} lg={3} xl={4} className='px-0'>
            <ListGroup className='h-100 bg-white small rounded-0 nk-shadow-box-1'>
              <MenuItem
                itemName='Electronic Devices 1'
                onMouseEnter={() => setIsItems2(true)}
              />
            </ListGroup>
          </Col>

          {/* Menu-Col-1-End */}
          {/* Menu-Col-2 */}
          <Col xs={6} md={4} lg={3} xl={4} className='px-0'>
            {isItems2 && (
              <ListGroup className='h-100 bg-white small rounded-0 nk-shadow-box-1'>
                <MenuItem
                  link='/mobiles'
                  itemName='Mobiles'
                  onMouseEnter={() => setIsLink1(true)}
                />
                <MenuItem link='/mobiles' itemName='Mobiles' />
                <MenuItem itemName='Electronic Devices 3' />
                <MenuItem itemName='Electronic Devices 4' />
              </ListGroup>
            )}
          </Col>
          {/* Menu-Col-2-End */}
          {/* Menu-Col-3 */}
          <Col xs={6} md={4} lg={3} xl={4} className='px-0 mt-1 mt-md-0'>
            {isLink1 && (
              <ListGroup
                className='h-100 bg-white small rounded-0 nk-shadow-box-1'
                onMouseLeave={() => setIsLink1(false)}
              >
                <MenuItem link='/mobiles' itemName='Mobiles' />
                <MenuItem link='/' itemName='Option-2' />
              </ListGroup>
            )}
          </Col>
          {/* Menu-Col-3-End */}
        </Row>
      )}
    </StyleRoot>
  );
};

export default HeaderNav;
