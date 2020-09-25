import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import './categories.styles.css';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Brand from '../brand'
import Rating from '../rating'
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  Pagination,
  Spinner,
} from 'react-bootstrap';
// Icons

import ChevronRightIcon from '../../assets/svgs/ChevronRight';
import SaleItem from '../../components/saleItem/saleItem';
import StarFillIcon from '../../assets/svgs/Star-fill';
import StarHalfFillIcon from '../../assets/svgs/Star-half-fill';
import StarIcon from '../../assets/svgs/Star';
import CheckBox from '../../components/check-box/check-box';
import PlayFillIcon from '../../assets/svgs/PlayFill';
import ToggleSideBar from '../../components/toggle/ToggleSideBar';
import ToggleViewMore from '../../components/toggle/ToggleViewMore';
import { useQuery } from 'react-query';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts, getProductstype } from '../../actions';
import { useCart } from "react-use-cart";
import ModelCart from '../../components/model/model-cart';
import '../../components/check-box/check-box.styles.css'
import Sidebar1 from './sidebar1';

const data1 = [
  // { value: 'Best Match', label: '1' },
  { value: 1, label: 'Price low to hight' },
  { value: 2, label: 'Price hight to low' },
];

const ItemsPage = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [show, setShow] = useState(false);
  const [prodList, setProdList] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const param = useParams();
  const [categoriesbytype, setCategoriesbytype] =useState(param.id)
  const [categoriesbybrand, setCategoriesbybrand] =useState()
	const [ isSearchable ] = useState(false);
  const {data, status ,isLoading } = useQuery([ 'product', categoriesbytype,categoriesbybrand], getProductstype);
  const products = useSelector((state) => state.products);
  const {addItem, items, inCart} = useCart();
  const dispatch = useDispatch();



  let categories = [];
  let brand = []
  let selected = [];

  const categoryClick = (e) => {
    setCategoriesbytype(e.target.name)
    
  }
  const brandClick = (e) => {
    setCategoriesbybrand(e.target.name)
  }

  

  useEffect(()=>{
    if (!isLoading) {
      setProdList(data.products)
     
    }
  },[isLoading])

  

	const handleClickCart = (product) => {
    toast.success('Product Added Successfully', {
      autoClose: '1500',
    });
		const productWithId ={
			...product,
			id: product._id
		}
	
		addItem(productWithId)
   
  };
  
  const handleClickPrice = () => {
    const sorted = prodList.sort((a,b) => a.price - b.price);
    console.log(prodList)
    setProdList(sorted);
   
  
  }
  const onSubmit = data => console.log(data);


  

  return (
    <>
    
      <ModelCart show={show} onClick={handleClose} onHide={handleClose} />
      <Container fluid className='categories-container px-0 mt-3 mb-5'>
        <Container className='px-0'>
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
          <Brand />
        </Container>
        <Container className='px-0 '>
          <Row className='bg-white  mx-0 rounded'>
            <Col lg={2} className='categories-side-bar p-3 mr-1 shadow-sm'>
              <main className='d-none d-lg-block'>
                <section className='border-bottom pb-2 mb-2'>
                  <div className='small'>
                    <small className='font-weight-bold'>
                     Selected Category
                    </small>
                  </div>
                  <Button
                    as={Link}
                    to='/mobiles'
                    className='p-0'
                    variant='link'
                    size='sm'
                  >
                    <small className="text-capitalize">{param.id}</small>
                  </Button>
                </section>
                {/* Section-Check-Box */}
                <section>
                  <Sidebar1 handler ={categoryClick} type ="category"/>
                 
                </section>
                <section>
                <Sidebar1 handler ={brandClick} type ="brand"/>
                </section>

                <section>
                  

                  <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                    <div className='small mb-2'>
                      <small className='font-weight-bold'>Price</small>
                    </div>
                    <Form onSubmit ={handleSubmit(onSubmit)} >
                      <Row className='mx-0 justify-content-between'>
                        <Col xs={4} className='px-0'>
                          <Form.Control
                            ref={register}
                            size='sm'
                            type='number'
                            placeholder='Min'
                          />
                        </Col>
                        -
                        <Col xs={4} className='px-0'>
                          <Form.Control
                            size='sm'
                            type='number'
                            placeholder='Max'
                          />
                        </Col>
                        <Col xs={2} className='px-0'>
                          <Button
                            className='d-flex px-2'
                            variant='success'
                            type='submit'
                          >
                            <PlayFillIcon />
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>

                  <Rating />
                </section>
                {/* Section-Check-Box-End */}
              </main>
              {/* Toggle */}
              <div className='d-lg-none'>
                <ToggleSideBar
                  id='Side-bar'
                  className='d-lg-none side-bar-toggle h4 mb-0 shadow-sm ml-n3 p-2'
                >
                  <main>
                    {/* Section-Check-Box */}
                    <section>
                      <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                        <div className='small mb-2'>
                          <small className='font-weight-bold'>Service</small>
                        </div>
                        <Sidebar1 type="category" />
                        {/* <CheckBox itemName='nokia'  onChange={(e) => console.log("clicked")} />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' /> */}
                        <ToggleViewMore id='one'>
                          <div className='d-flex flex-column'>
                            <CheckBox itemName='nokia' />
                            <CheckBox itemName='nokia' />
                            <CheckBox itemName='nokia' />
                            <CheckBox itemName='nokia' />
                            <CheckBox itemName='nokia' />
                            <CheckBox itemName='nokia' />
                          </div>
                        </ToggleViewMore>
                      </div>
                    </section>
                    <section>
                      <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                        <div className='small mb-2'>
                          <small className='font-weight-bold'>Location</small>
                        </div>
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                      </div>
                    </section>

                    <section>
                      <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                        <div className='small mb-2'>
                          <small className='font-weight-bold'>Brand</small>
                        </div>
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                        <CheckBox itemName='nokia' />
                      </div>

                      <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                        <div className='small mb-2'>
                          <small className='font-weight-bold'>Price</small>
                        </div>
                        <Form>
                          <Row className='mx-0 justify-content-between'>
                            <Col xs={4} className='px-0'>
                              <Form.Control
                                size='sm'
                                type='number'
                                placeholder='Min'
                              />
                            </Col>
                            -
                            <Col xs={4} className='px-0'>
                              <Form.Control
                                size='sm'
                                type='number'
                                placeholder='Max'
                              />
                            </Col>
                            <Col xs={2} className='px-0'>
                              <Button
                                className='d-flex px-2'
                                variant='success'
                                type='submit'
                              >
                                <PlayFillIcon />
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </div>

                      <div className='d-flex flex-column pb-2 mb-2'>
                        <div className='small mb-2'>
                          <small className='font-weight-bold'>Rating</small>
                        </div>
                        <span className='d-flex align-items-baseline mb-1'>
                          <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                          </span>
                        </span>
                        <span className='d-flex align-items-baseline'>
                          <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarIcon height={13} />
                          </span>
                          <small>
                            <small className='text-capitalize'>and up</small>
                          </small>
                        </span>
                        <span className='d-flex align-items-baseline'>
                          <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarIcon height={13} />
                            <StarIcon height={13} />
                          </span>
                          <small>
                            <small className='text-capitalize'>and up</small>
                          </small>
                        </span>
                        <span className='d-flex align-items-baseline'>
                          <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                            <StarFillIcon height={13} />
                            <StarFillIcon height={13} />
                            <StarIcon height={13} />
                            <StarIcon height={13} />
                            <StarIcon height={13} />
                          </span>
                          <small>
                            <small className='text-capitalize'>and up</small>
                          </small>
                        </span>
                        <span className='d-flex align-items-baseline'>
                          <span className='text-warning mr-1 w-25 d-flex justify-content-between'>
                            <StarFillIcon height={13} />
                            <StarIcon height={13} />
                            <StarIcon height={13} />
                            <StarIcon height={13} />
                            <StarIcon height={13} />
                          </span>
                          <small>
                            <small className='text-capitalize'>and up</small>
                          </small>
                        </span>
                      </div>
                    </section>
                    {/* Section-Check-Box-End */}
                  </main>
                </ToggleSideBar>
              </div>
					</Col>
					<Col className="p-3 ">
						<Row className="mx-0 mb-3 pb-3  border-bottom">
							<Col>
								<h5 className="mb-1 ">New Mobile Prices in Pakistan 2020</h5>
								<small class="text-muted">1972 items found in Mobiles</small>
							</Col>
							<Col
								xs={12}
								md={6}
								className="select-container d-flex align-items-center justify-content-md-end pt-2 pt-md-0 mt-auto"
							>
								<small class="text-muted mr-2">Sort By:</small>
								<Select
                  onChange = {(option)=>handleClickPrice(option.value)}
									className="w-75"
									// defaultValue={data1[0]}
									options={data1}
								/>
							</Col>
						</Row>
						<Row className="Section-2 mx-0 mb-4 flex-nowrap flex-lg-wrap overflow-auto row-cols-2 row-cols-md-3">
            
							{status === 'loading' ? (
								<h1>loading...</h1>
							) : (
                
								data.products.map((product, key = product._id) =>{
									const alreadyAdded = inCart(product._id)
									
									return(
									
									<Col lg={3} className="d-flex px-0  mb-3"  >
								
										<SaleItem
											link={`/product-view/${product._id}`}
											photo={product.images}
											itemName={product.name}
											price={product.price}
											priceMinus="Rs.11,445"
											priceDiscount="-83%"
										>
										
									
											<div className="order-first mb-2" >
												<span className="border border-success pb-1 mr-1">
													<img height={25} src={product.images} alt="item" />
												</span>
											</div>
										
											<div className="text-muted small">
												<small className="d-flex justify-content-between align-items-center">
													<span>
														<span className="text-warning mr-1">
															<StarFillIcon height={10} />
															<StarFillIcon height={10} />
															<StarFillIcon height={10} />
															<StarFillIcon height={10} />
															<StarFillIcon height={10} />
														</span>
														<small>(1)</small>
													</span>
													<span>Pakistan</span>
												</small>
											</div>
											<Button
												
												className="Sale-item-btn-cart mt-2 mx-2"
												variant="success"
												size="sm"
                        onClick={() => handleClickCart(product)}
                        
											>
												{alreadyAdded ? <small>ADD AGAIN </small> : <small>ADD TO CART </small> }  
												
												
											</Button>
											<ToastContainer />
										</SaleItem>
									</Col>
								)})
							)}
						</Row>
						<div className="d-flex justify-content-center text-green-light">
							<Pagination>
								<Pagination.Prev />
								<Pagination.Item active>{1}</Pagination.Item>
								<Pagination.Item>{2}</Pagination.Item>
								<Pagination.Item>{3}</Pagination.Item>
								<Pagination.Item>{4}</Pagination.Item>
								<Pagination.Item>{5}</Pagination.Item>
								<Pagination.Ellipsis />
								<Pagination.Item>{20}</Pagination.Item>
								<Pagination.Next />
							</Pagination>
						  </div>
					  </Col>
				  </Row>
			  </Container>
		</Container>
    </>
    
	);
};

export default ItemsPage;
