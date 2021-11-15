
import React,{useState,useEffect} from 'react';
import {  Container, Row ,Button} from 'react-bootstrap';
import Bounce from 'react-reveal/Fade';
import SingleShop from '../SingleShop/SingleShop';

const Shop = () => {
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
                shops.map(shop=><SingleShop
                key={shop._id}
                shop={shop}
                ></SingleShop>)
            }  
           
           </Row>
            </Container>
        </div>
    );
};

export default Shop;