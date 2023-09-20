import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



import Helmet from '../components/Helmet/Helmet';

import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap';

import heroImage from '../assets/images/hero-img.png'

import Services from '../Services/Services';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';

import counterImg from '../assets/images/counter-timer-img.png'

import useGetData from '../custom-hooks/useGetData';

const Home = () => {

  const {data: products, loading} = useGetData('products')


   const [trendingproducts, setTrendingproducts] = useState([])
   const [bestSalesproducts, setBestSalesproducts] = useState([]) 
   const [mobileproducts, setMobileproducts] = useState([])
   const [wirelessproducts, setWirelessproducts] = useState([])
   const [popularproducts, setPopularproducts] = useState([])




  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingproducts = products.filter(
      (item) => item.category === 'chair'
    )
    const filteredBestSalesgproducts = products.filter(
      (item) => item.category === 'sofa'
    )

    const filteredMobileproducts = products.filter(
      (item) => item.category === 'mobile'
    )

    const filteredWirelessproducts = products.filter(
      (item) => item.category === 'wireless'
    )

    const filteredPopularproducts = products.filter(
      (item) => item.category === 'watch'
    )


    setTrendingproducts(filteredTrendingproducts);
    setBestSalesproducts(filteredBestSalesgproducts);
    setMobileproducts(filteredMobileproducts);
    setWirelessproducts(filteredWirelessproducts);
    setPopularproducts(filteredPopularproducts);
  }, [products])

  return(
  <Helmet title={'Home'}>
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero_content">
               <p className="hero_subtitle">Trending product in {year}</p>
               <h2>Make Your Interior More Minimalistic & Modern </h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint fuga nihil. Consequatur accusantium dolor est aut quia iure magnam.</p>

               <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'> SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={heroImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

   <Services />
   <section className='trending_products'>
     <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section_title'>Trending Products</h2>
        </Col>

        {
          loading ? (
          <h5 className='fw-bold'>Loading....</h5>
            )  : (

          <ProductsList data={trendingproducts} />

        )}

      </Row>
     </Container>
   </section>

   <section className="best_sales">
    <Container>
      <Row>
      <Col lg='12' className='text-center'>
          <h2 className='section_title'>Best Sales</h2>
        </Col>

        {
          loading ? (
          <h5 className='fw-bold'>Loading....</h5>
            )  : (

          <ProductsList data={bestSalesproducts} />

        )}

      </Row>
    </Container>
   </section>

   <section className="timer_count">
    <Container>
      <Row>
        <Col lg='6' md='12' className='count_down-col'>
           <div className="clock_top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
           </div>
           <Clock />

           <motion.button
           whileTap={{ scale: 1.2}}
            className="buy_btn store_btn">
            <Link to='/shop'>Visit Store</Link>
            </motion.button>

        </Col>
         
        <Col lg='6' md='12' className='text-end counter_img'>
          <img src={counterImg} alt="" />
        </Col>
      </Row>
    </Container>
   </section>


   <section className="new_arrivals">
    <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='section_title'>New Arrivals</h2>
        </Col>

        {
          loading ? (
          <h5 className='fw-bold'>Loading....</h5>
            )  : (

          <ProductsList data={mobileproducts} />

        )}

         { 
          loading ? (
          <h5 className='fw-bold'>Loading....</h5>
            )  : (

          <ProductsList data={wirelessproducts} />

        )}

      </Row>
    </Container>
   </section>

   <section className="popular_category">
   <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
          <h2 className='section_title'>Popular in Category</h2>
        </Col>

        {
          loading ? (
          <h5 className='fw-bold'>Loading....</h5>
            )  : (

          <ProductsList data={popularproducts} />

        )}

        
      </Row>
    </Container>
   </section>
  </Helmet>
  );
};

export default Home;
