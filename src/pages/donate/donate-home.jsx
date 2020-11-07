import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionDonationCard from '../../components/sections/Section-donation-card';
import SlideShow from '../../components/slideshow/slide-show';

const DonateHome = () => {
    return (
       <main className='bg-white mt-n3'>
           <SlideShow/>
           <SectionDonationCard/>
           <section className='bg-light'>
           <Container className='px-0 py-5'>
             <div className='px-3 mb-4'>
             <h6><small className='text-success font-weight-bold'>TRENDING TOPIC</small></h6>
             <h4 className='font-weight-bold'>Fundraising for coronavirus relief</h4>
             </div>
             <Row className='mx-0 mb-4'>
              <Col lg={4} className='mb-3 mb-lg-0'>
                  <img className='img-fluid rounded-lg' src='https://cdn.pixabay.com/photo/2016/11/14/03/05/surgery-1822458_1280.jpg' alt='image' />
              </Col>
              <Col>
                <p className='mb-4'>As COVID-19 continues to spread, more individuals, communities and entire nations are feeling the impact on their daily lives. Beyond the global health crisis, the coronavirus is having a severe economic impact on individuals, small businesses and medical organisations.</p>
                <p>The urgent need for medical supplies, basic necessities and quality healthcare is only increasing as more communities become affected by COVID-19. And with hundreds of thousands of individuals across the globe in quarantine, there is a growing need for financial support.</p>
              </Col>
             </Row>
             <Row className='mx-0'>
              <Col>
                <p className='mb-4'>Thankfully, we all have the power to do something and make a difference. Here at GoFundMe, we're empowering individuals, organisations and communities to step up in the face of the COVID-19 outbreak and help those who need it most.</p>
                <p>Start a GoFundMe to raise money to help yourself and others during this difficult time. Read our blog post Fundraising for Coronavirus Relief: How You Can Help the Fight for more information.</p>
                <Button as={Link} to='/' className='px-3 py-2 mt-4' variant="success"><h5 className='mb-0'>Start a GoFundMe</h5></Button>
              </Col>
              <Col lg={4} className='order-first order-lg-last mb-3 mb-lg-0'>
                  <img className='img-fluid rounded-lg' src='https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg' alt='image' />
              </Col>
             </Row>
           </Container>
           </section>
       </main>
    )
}

export default DonateHome;