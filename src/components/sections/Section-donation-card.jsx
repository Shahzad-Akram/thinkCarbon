import React from 'react';
import { Container, Spinner, Row } from 'react-bootstrap';

import SaleItem from '../saleItem/saleItem';

import { useSelector, useDispatch } from 'react-redux';
import { getProductslimit } from '../../actions';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';


const SectionDonationCard = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

 
  const { status, error, data } = useQuery(['product', 3], getProductslimit);

  if (status !== 'loading') {
    dispatch({
      type: 'GET_PRODUCT_BY_LIMIT',
      payload: data,
    });
  }


  const dataDonationList = [
    { images: 'https://d2g8igdw686xgo.cloudfront.net/52181016_1603832127649987_r.jpeg', link:'/', title:'TUSTIN, CA', titleLink: 'Orange County, CA Firefighters', titleSub: 'Funds go to Fallen Fire Fighter Relief Fund', time: '2m ago', donationRate: '$692,900', Rate: '$1.0M'},
    { images: 'https://d2g8igdw686xgo.cloudfront.net/52155528_1603748139526048_r.jpeg', link:'/', title:'TUSTIN, CA', titleLink: 'Orange County, CA Firefighters', titleSub: 'Funds go to Fallen Fire Fighter Relief Fund', time: '2m ago', donationRate: '$692,900', Rate: '$1.0M'},
    { images: 'https://d2g8igdw686xgo.cloudfront.net/52129668_1603641271238216_r.jpeg', link:'/', title:'TUSTIN, CA', titleLink: 'Orange County, CA Firefighters', titleSub: 'Funds go to Fallen Fire Fighter Relief Fund', time: '2m ago', donationRate: '$692,900', Rate: '$1.0M'},
]


  return (
    <Container className='px-0 pb-5'>
      <h3 className='font-weight-bold px-3'>
      Top fundraisers
      </h3>
      <Row className='row-cols-1 row-cols-md-3  d-flex overflow-auto pt-3 pb-0 pb-md-3 mx-3 mx-md-0'>
          {status == 'loading' ? (
            <div className='ml-5'>
              <Spinner animation='border' variant='success' />
            </div>
          ) : (
           dataDonationList.map((dataDonationList) => (
              <div className='px-3 Section-2 my-3 my-md-0'>
                   <SaleItem
                link={dataDonationList.link}
                photo={dataDonationList.images}
                stylePhoto={{  objectFit: 'cover',}}   
              >
                  <div className='small px-1'>
                  <h6 className='px-2 font-weight-bold text-success'>{dataDonationList.title}</h6>
                  <Link className='px-2 py-1 btn-outline-dark font-weight-bold' to={dataDonationList.link}>{dataDonationList.titleLink}</Link>
                  <div className='mt-2 px-2 h6 text-muted'>{dataDonationList.titleSub}</div>
                  <small  className='px-2 mb-2'>Last donation {dataDonationList.time}</small>
                  <div className='px-2'>
                      <span className='font-weight-bold'>{dataDonationList.donationRate} raised</span>
                      <span> of {dataDonationList.Rate}</span>
                  </div>
                  </div>
                  </SaleItem>
              </div>            
            ))
            
          )}
        </Row>
        <div className='px-3 text-right'>
              <Link className='btn-link' to='/donate-gallery'>See more »</Link>
          </div>
    </Container>
  );
};

export default SectionDonationCard;
