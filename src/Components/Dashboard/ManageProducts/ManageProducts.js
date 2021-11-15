
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Bounce from 'react-reveal/Fade';
import SingleShop from '../../Home/SingleShop/SingleShop';

const ManageProducts = () => {
    const [shops,setShops] = useState([])
    useEffect(()=>{
    fetch('https://obscure-forest-04770.herokuapp.com/shops')
    .then(res=>res.json())
    .then(data=>setShops(data))
    },[])
    return (
    <div>
        <Container className="">
             <Bounce>
             <h4 className="text-center pt-5 pb-5 fw-bold">Our Shop</h4>
        </Bounce>
               
            <Row xs={1} md={3} className="g-4 caed-container"> 
            {
                shops.map(shop=> <Col>
                    <Card className="bg-light card-title border border-light rounded shadow-sm p-3 mb-5 bg-body rounded">
                      <Card.Img className="card-img" src={shop.img}/>
                      <Card.Body className="text-right">
                        <Card.Title><h6>{shop.shopName}</h6></Card.Title>
                        <Link><Button variant="outline-success " size="sm" className="rounded fw-bold btn text-center">Delete</Button></Link>
                      </Card.Body>
                    </Card>
                  </Col>
                      )
            }  
           
           </Row>
            </Container>
    </div>
    );
};

export default ManageProducts;