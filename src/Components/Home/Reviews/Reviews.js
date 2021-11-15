import React, { useEffect, useState } from 'react';
import {  Container, Row ,Button} from 'react-bootstrap';
import Bounce from 'react-reveal/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Reviews = () => {
const [reviews,setReviews] = useState([])

useEffect(()=>{
    fetch('https://obscure-forest-04770.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
},[])

    return (
        <Container className="">
             <Bounce>
             <h4 className="text-center pt-5 pb-5 fw-bold">Customer Reviews!</h4>
        </Bounce>
               
            <Row xs={1} md={3} className="g-4 caed-container"> 
            {
                reviews.map(review=><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {review.description}
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        height="194"
                        variant="circular"
                        image={review.img}
                        alt="green iguana"
                      />
                      <Typography gutterBottom variant="h5" component="div">
                      CustomerName: {review.name}
                         
                        </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                      Rating: {review.rating}
                        </Typography>
                    </CardActionArea>
                  </Card>)
            }  
           
           </Row>
            </Container>
    );
};

export default Reviews;