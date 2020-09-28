import React, { useState, useEffect } from 'react';

import ReactSearchBox from 'react-search-box';
import AsyncSelect from 'react-select/async'
import './switch.styles.css';
import './menu-list.styles.css';
import { useQuery } from 'react-query';
import {getProductstype} from '../../actions';
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
import { getSearchedProducts } from '../../actions/index';
import {useSelector} from 'react-redux'


const HeaderNav = ({ onChange, children }) => {
  const products = useSelector((state) => state.products);

  const [isItems1, setIsItems1] = useState(false);
  const [isItems2, setIsItems2] = useState(false);
  const [isLink1, setIsLink1] = useState(false);
  const [inputValue, SetInputValue] = useState({})
  const {data, status ,isLoading } = useQuery([ 'product', inputValue ], getSearchedProducts);

  
  const [option, SetOption] = useState([
    { value: "Abe", label: "Abe", customAbbreviation: "A" },
    { value: "John", label: "John", customAbbreviation: "J" },
    { value: "Dustin", label: "Dustin", customAbbreviation: "D" }
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
 
 
    
    useEffect(() => {

      if(data !== undefined && data !== null  ){
        const array = data.map(data=> ({
         label: data.name,
         price: data.price,
         stock: data.stockQuantity
        }))
        SetOption(array)
     }
     
     console.log(data,option)
    },[inputValue])
    
  

  const filterOptions = (inputValue) => {
    return option.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
     
      callback(filterOptions(inputValue));
    }, 1000);
  };
  
  const formatOptionLabel = ({
    value, label, customAbbreviation,
  }) => (
    <div class='d-flex '>
      <div class='col-md-2 d-flex justify-content-center align-items-center'>
        <span class='bg-info p-2 b-2px text-white'>
          {value.charAt(0).toUpperCase()}
        </span>
      </div>
      <div class='col-md-10'>
        <div class='flex-column'>
          <div class='d-flex justify-content-between'>
            <div>{label}</div>
            <small>{label.toUpperCase()}</small>
          </div>
          <div className='d-flex justify-content-between'>
            <div class=' small'>PKR {label}</div>
            <div className=' small'>In Stock {label}</div>
          </div>
        </div>
      </div>
    </div>
  );
  const handleInputChange = (newValue) => {
    const newInput= newValue.replace(/\W/g, '')
    SetInputValue(newInput)
  }


  // useEffect(() => {
  //   if(products !== null){
  //     SetOption(products.data.products)
  //     console.log(option)
  //   }

  // }, [products]);



  return (
    <StyleRoot className='bg-white'>
      
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
            
              <AsyncSelect
              cacheOptions
              defaultOptions
            formatOptionLabel={formatOptionLabel}
            loadOptions={loadOptions}
             onInputChange={handleInputChange}
             />
              
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
                {selected.map((category) => (
                <MenuItem
                  link={`/items/${category}`}
                  itemName={category}
                  onMouseEnter={() => setIsLink1(true)}
                />
              ))}
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
