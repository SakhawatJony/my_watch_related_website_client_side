import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navagation from '../../Sharead/Navagation/Navagation';
import Bounce from 'react-reveal/Fade';
import WatchHome from '../WatchHome/WatchHome';
import Reviews from '../Reviews/Reviews';
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer';


const Home = () => {
    const [shops,setShops] = useState([])
    
    useEffect(()=>{
    fetch('http://localhost:5000/shops')
    .then(res=>res.json())
    .then(data=>setShops(data))
    },[])
    return (
        <>
       {/* navigation section add */}
        <Navagation></Navagation>
        {/* HomeBanner section add */}
        <WatchHome></WatchHome>
       {/* shop section add */}
        <Container className="">
             <Bounce>
             <h4 className="text-center pt-5 pb-5 fw-bold">Our Shop</h4>
        </Bounce>
               
            <Row xs={1} md={3} className="g-4 caed-container"> 
            {
                shops.slice(5).map(shop=><Container>
                <Col>
              <Card className="bg-lightgreen card-title border border-light rounded shadow-sm p-3 mb-5 bg-body rounded">
                <Card.Img className="card-img" src={shop.img}/>
                <Card.Body className="text-right">
                  <Card.Title><h6>{shop.shopName}</h6></Card.Title>
                  <Card.Text>
                    <h6>total cost <span>$</span>{shop.price}</h6>
                    {shop.des.slice(0,60)}
                  </Card.Text>
                  <Link to={`/shopdetails/${shop._id}`}><Button variant="outline-success " size="sm" className="rounded fw-bold btn text-center">Buy Now</Button></Link>
                </Card.Body>
              </Card>
            </Col>
                </Container>)
            }  
           
           </Row>
            </Container>
            {/* review section addd  */}
            <Reviews></Reviews>
            {/* about section added  */}
            <AboutUs></AboutUs>
            {/* footer section add  */}
            <Footer></Footer>
        </>
    );
};

export default Home;