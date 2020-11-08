import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ShieldIcon from '../../assets/svgs/Shield';
import SuitHeart from '../../assets/svgs/SuitHeart';

const textArr = [ 
    { text: 'Orange County Firefighters are raising money in support of 2 firefighters critically injured while protecting our community battling the Silverado Fire.'},
    { text: 'All proceeds donated through this GoFundMe page will go directly to the Fallen Fire Fighter Relief Fund to cover costs related to burn care and family support during this difficult time.'},
    { text: 'If you would like to  send cards & well wishes to our 2 firefighters the can be mailed to the address below and we will make sure they get them : '},
    { text: 'Orange County Firefighters are raising money in support of 2 firefighters critically injured while protecting our community battling the Silverado Fire.'},
    { text: 'All proceeds donated through this GoFundMe page will go directly to the Fallen Fire Fighter Relief Fund to cover costs related to burn care and family support during this difficult time.'},
    { text: 'If you would like to  send cards & well wishes to our 2 firefighters the can be mailed to the address below and we will make sure they get them : '},
]

const commentArr = [ 
    {icon: 
    <Button variant='success' className='rounded-circle mr-n2' disabled>
    <SuitHeart height={15}/>
    </Button>, 
    name: 'Sandie & Ted McCann', money: '$100',  text: 'In our prayers to heal quickly and fully. Much love to our firefighters and their families.', time: '14 hours ago'},
    {icon: 
        <Button variant='success' className='rounded-circle mr-n2' disabled>
        <SuitHeart height={15}/>
        </Button>, 
        name: 'Sandie & Ted McCann', money: '$100',  text: 'In our prayers to heal quickly and fully. Much love to our firefighters and their families.', time: '14 hours ago'},
        {icon: 
            <Button variant='success' className='rounded-circle mr-n2' disabled>
            <SuitHeart height={15}/>
            </Button>, 
            name: 'Sandie & Ted McCann', money: '$100',  text: 'In our prayers to heal quickly and fully. Much love to our firefighters and their families.', time: '14 hours ago'},
            {icon: 
                <Button variant='success' className='rounded-circle mr-n2' disabled>
                <SuitHeart height={15}/>
                </Button>, 
                name: 'Sandie & Ted McCann', money: '$100',  text: 'In our prayers to heal quickly and fully. Much love to our firefighters and their families.', time: '14 hours ago'},
                {icon: 
                    <Button variant='success' className='rounded-circle mr-n2' disabled>
                    <SuitHeart height={15}/>
                    </Button>, 
                    name: 'Sandie & Ted McCann', money: '$100',  text: 'In our prayers to heal quickly and fully. Much love to our firefighters and their families.', time: '14 hours ago'},
  ]


  const fundraiserArr = [ 
    {icon: <SuitHeart height={30}/>,title: 'NO.1 FUNDRAISING PLATFORM', text: 'People have raised more money on GoFundMe than anywhere else.'},
     {icon: <SuitHeart height={30}/>,title: 'GOFUNDME GUARANTEE', text: 'In the rare case that something is not right, we will refund your donation. '},
         {icon: <SuitHeart height={30}/>,title: 'EXPERT ADVICE, 24/7', text: 'Contact us with your questions and we’ll answer, day or night!'},
     ]

const DonateCard = () => { 
    return (
        <section className='bg-light'>
            <Container className='px-0 py-5'>
             <h2 className='font-weight-bold mb-4 text-center text-lg-left'>Orange County, CA Firefighters</h2>   
            <Row className='mx-0 mb-4'>
              <Col className='mb-3 mb-lg-0'>
                  <img className='img-fluid rounded-lg mb-4' src='https://d2g8igdw686xgo.cloudfront.net/52181016_1603832127649987_r.jpeg' alt='image' />
                  <Col lg={9} className='mx-auto'>
                    <Row>
                    <Col xs={4} md={2} lg={4} xl={3}>
                    <Button variant='success' className='rounded-circle mr-n2' disabled>
                     <SuitHeart height={15}/>
                     </Button>
                     <Button  variant='success' className='rounded-circle' disabled>
                     <ShieldIcon height={15} />
                     </Button>
                    </Col>
                     <Col className='px-0'>
                     <small>
                     OC Firefighters Local 3631 is organising this fundraiser on behalf of Fallen Fire Fighter Relief Fund.
                     </small>
                     </Col>
                    </Row>
                    <div className='my-4 py-3 border-top border-bottom small'>
                    <span>Created 27 October 2020</span>
                    <span className='mx-2'>|</span>
                    <span>Accidents & Emergencies</span>
                    </div>
                    { textArr.map((textArr) => (
                         <div className='small'>
                         <p className='my-3'>{textArr.text}</p>
                         </div>
                    ))}
                    <Row className='justify-content-between my-4'>
                        <Col xs={6}>
                        <Button block variant='success' className='py-2'>Donate</Button>
                        </Col>
                         <Col xs={6}>
                         <Button block variant='outline-success' className='py-2'>Share</Button>
                         </Col>
                    </Row>
                    <section>
                    <h6>Comments</h6>
                    <div className='scrollbox h-35vh'>
                        { commentArr.map((commentArr) => (
                         <div className='small border-top'> 
                          <Row className='py-3 mx-0'>
                              <Col xs={1} className='mr-4 mr-lg-3'>
                               {commentArr.icon}
                              </Col>
                              <Col>
                              <div>{commentArr.name} donated <b>{commentArr.money}</b></div>
                              <p className='my-2'>{commentArr.text}</p>
                              <span className='text-black-50'>{commentArr.time}</span>
                              </Col>
                          </Row>
                         </div>
                    ))}
                    </div>
                    </section>
                  </Col>
              </Col>
              <Col xs={12} lg={4}>
                <section className='shadow-sm bg-white p-3'>
                  <div className='mb-2'> 
                     <span><b>$700,275</b> <small className='text-muted'>raised of $1,000,000 target</small></span>
                  </div>
                 
                      <div className='d-flex small mb-3'>
                         <div  style={{lineHeight: '13px',}}>
                             <b className='d-block'>6.6k</b>
                             <small className='text-muted'>donors</small>
                         </div>
                         <div className='mx-3' style={{lineHeight: '13px',}}>
                             <b className='d-block'>15.3k</b>
                             <small className='text-muted'>shares</small>
                         </div>
                         <div style={{lineHeight: '13px',}}>
                             <b className='d-block'>6.7k</b>
                             <small className='text-muted'>followers</small>
                         </div>
                      </div>     
             
                    <div className='scrollbox h-35vh'>
                        { commentArr.map((commentArr) => (
                         <div className='small border-top'> 
                          <Row className='py-3 mx-0'>
                              <Col xs={1} className='mr-4'>
                               {commentArr.icon}
                              </Col>
                              <Col>
                              <div>{commentArr.name}</div>
                               <div>
                               <b>{commentArr.money}</b>
                               <span className='mx-3'>-</span>
                               <span className='text-black-50'>{commentArr.time}</span>
                               </div>
                              </Col>
                          </Row>
                         </div>
                    ))}
                    </div>
                    <Row className='mt-4'>
                        <Col xs={12} sm={6} lg={12}>
                        <Button block variant='outline-success' className='py-2 mb-3'>Share</Button>
                        </Col>
                         <Col xs={12} sm={6} lg={12}>
                         <Button block variant='success' className='py-2'>Donate Now</Button>
                         </Col>
                    </Row>
                </section>
              </Col>
              <div className='d-flex flex-column flex-lg-row text-center text-lg-left justify-content-center w-100 border-top pt-4'>
                    { fundraiserArr.map((fundraiserArr) => (
                         <div className='small'> 
                          <Row className='mx-0 mt-4 mt-lg-0'>
                              <Col lg={1} className='mr-lg-3 mb-2 mb-lg-0'>
                               {fundraiserArr.icon}
                              </Col>
                              <Col lg={7}>
                              <h6 className='font-weight-bold'>{fundraiserArr.title}</h6>
                              <p className='text-black-50'>{fundraiserArr.text}</p>
                              </Col>
                          </Row>
                         </div>
                    ))}
                    </div>
             </Row>
        </Container>
        </section>
    );
}

export default DonateCard;