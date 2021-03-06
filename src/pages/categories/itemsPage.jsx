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
  Pagination


} from 'react-bootstrap';
// Icons

import ChevronRightIcon from '../../assets/svgs/ChevronRight';
import SaleItem from '../../components/saleItem/saleItem';
import StarFillIcon from '../../assets/svgs/Star-fill';
import PlayFillIcon from '../../assets/svgs/PlayFill';
import ToggleSideBar from '../../components/toggle/ToggleSideBar';
import { useQuery } from 'react-query';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts, getProductstype } from '../../actions';
import { useCart } from "react-use-cart";
import ModelCart from '../../components/model/model-cart';
import '../../components/check-box/check-box.styles.css'
import Sidebar1 from './sidebar1';
import Filter from './filter';
import Topbar from './topbar'




const data1 = [
  // { value: 'Best Match', label: '1' },
  { value: 1, label: 'Price low to hight' },
  { value: 2, label: 'Price hight to low' },
];

const ItemsPage = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [ page, setPage ] = useState( 1 );
  const [paginate, setPaginate] = useState(0);
  const [show, setShow] = useState(false);
  const [prodList, setProdList] = useState([])
  const [loading, setLoading] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const param = useParams();
  const [categoriesbytype, setCategoriesbytype] =useState(param.id)
  const [categoriesbybrand, setCategoriesbybrand] =useState()
  const [categoriesbyprice, setCategoriesbyprice] =useState()
  const {data, status ,isLoading } = useQuery([ 'product', categoriesbytype,categoriesbybrand,categoriesbyprice, paginate ], getProductstype);
  const [pageNumber, setPageNumber] = useState()
  const [pages, setPages] = useState([])
  const products = useSelector((state) => state.products);
  const { addItem, items, inCart } = useCart();
  const dispatch = useDispatch();



  let categories = [];
  let brand = []
  let selected = [];
  const categoryClick = (e) => {
    setLoading(true)
    setCategoriesbytype(e.target.name)

  }
  const brandClick = (e) => {
    
    setCategoriesbybrand(e.target.name)
  }



  useEffect(() => {
    setLoading(true)
    if (!isLoading) {
      
      setProdList(data.products)
      setPageNumber(Math.ceil(data.count / 5 ))
    }
    setLoading(false)
  }, [loading,isLoading,setCategoriesbybrand,setCategoriesbyprice,setCategoriesbytype, paginate])

  useEffect(()=> {
    let x = [];
    for( var i = 1; i <= pageNumber; i++)
    {
      x.push(i)
      
    }
    setPages(x)
    console.log(pages)
  },[data, pageNumber])


  const handleClickCart = (product) => {
    toast.success('Product Added Successfully', {
      autoClose: '1500',
    });
    const productWithId = {
      ...product,
      id: product._id
    }

    addItem(productWithId)

  };
  


  

  const handleClickPrice = (value) => {
   
    let sorted
    if(value === 2){
       sorted = prodList.sort((a, b) => b.price - a.price);
    }
    else
    {
      sorted = prodList.sort((a, b) => a.price - b.price);
    }
    setProdList([...sorted]);
  }
  const onSubmit = data => {setCategoriesbyprice(data)};

  const incrementPage = () => {
      if(page < pageNumber){
        setPaginate(paginate + 5)
        setPage(page + 1)
        console.log(page,pageNumber )
      }
      else{
        console.log('no more pages')
      }
    
  }
  const decrementPage = () => {
    if(page > 1) {
      setPaginate(paginate - 5)
      setPage(page - 1)
    }
  }




  return (
    <>
    {console.log(pages, pageNumber)}
      <ModelCart show={show} onClick={handleClose} onHide={handleClose} />
      <Container fluid className='categories-container px-0 mt-3 mb-5'>
        <Container className='px-3 px-md-0'>
          <Topbar />
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
                  <Sidebar1 handler={categoryClick} type="category" />

                </section>
                <section>
                  <Sidebar1 handler={brandClick} type="brand" />
                </section>

                <section>


                  <div className='d-flex flex-column border-bottom pb-2 mb-2'>
                    <div className='small mb-2'>
                      <small className='font-weight-bold'>Price</small>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)} >
                      <Row className='mx-0 justify-content-between'>
                        <Col xs={4} className='px-0'>
                          <Form.Control
                            ref={register}
                            size='sm'
                            type='number'
                            placeholder='Min'
                            name = 'min'
                          />
                        </Col>
                        -
                        <Col xs={4} className='px-0'>
                          <Form.Control
                          ref ={register}
                            size='sm'
                            type='number'
                            placeholder='Max'
                            name = 'max'
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
                  <Filter />
                </ToggleSideBar>
              </div>
            </Col>
            <Col className="px-0 px-md-3 py-3">
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
                    onChange={(option) => handleClickPrice(option.value)}
                    className="w-75"
                    // defaultValue={data1[0]}
                    options={data1}
                  />
                </Col>
              </Row>
              <Row className="Section-2 mx-0 mb-4 overflow-auto row-cols-2 row-cols-md-4 row-cols-lg-3">

                {status === 'loading' ? (
                  <h1>loading...</h1>
                ) : (

                  prodList.map((product, key = product._id) => {
                      const alreadyAdded = inCart(product._id)

                      return (

                        <Col xl={3} className="d-flex justify-content-center px-0 mb-3"  >

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
                              {alreadyAdded ? <small>ADD AGAIN </small> : <small>ADD TO CART </small>}


                            </Button>
                            <ToastContainer />
                          </SaleItem>
                        </Col>
                      )
                    })
                  )}
              </Row>
              
              <div className="d-flex justify-content-center text-green-light pagination">
            
                <Pagination>
                  <Pagination.Prev onClick = {decrementPage}/>
                  {pages.map(pages => (
                    <Pagination.Item active= {pages === page ? true : false}>{pages}</Pagination.Item>
                  ))}
                  <Pagination.Next onClick = {incrementPage} />
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
