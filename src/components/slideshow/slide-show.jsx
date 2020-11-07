import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SlideShow.styles.css';

const SlideShow = () => { 
    return( 
     <section className='vh-100'>
     <ul class='slideshow'>
  <li>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aperiam dolor! Aut deserunt praesentium magni.</h3>
    <span>0</span>
  </li>
  <li>
  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aperiam dolor! Aut deserunt praesentium magni.</h3>
    <span>1</span>
  </li>
  <li>
  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aperiam dolor! Aut deserunt praesentium magni.</h3>
    <span>2</span>
  </li>
  <li>
  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aperiam dolor! Aut deserunt praesentium magni.</h3>
    <span>3</span>
  </li>
</ul>
  
  <div className='slide-heading'>
  <Jumbotron className='bg-transparent text-white'>
  <h1>Fundraising for the people and causes you care about</h1>
  <h4 className='mt-3 mb-4 font-weight-light'>
  Get Started Today.
  </h4>

    <Button as={Link} to='/' className='p-3' variant="success"><h5>Start a GoFundMe</h5></Button>

</Jumbotron>
  </div>
     </section>
    );
}

export default SlideShow;