import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
import bg1 from '../../../images/pic4.png';
import bg2 from '../../../images/pic7.png';
import bg3 from '../../../images/pic3.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const WatchHome = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid style={{backgroundColor:"lightgrey"}} container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 8 }}>
  <Grid item xs={6} className="m-auto">
   
   <div className="ps-5">
   <h1>Welcome To My </h1>
  <h2>Watch Shop</h2>
  <p>At WatchShop, you can guarantee you will find more watch brands than anywhere else. From the biggest designer brands, to the best of luxury and some hidden gems, along with outstanding service and next day delivery, WatchShop is the hottest place to buy your next watch.</p>
  <Button variant="success">Explore Now</Button>
   </div>
  </Grid>
  <Grid item xs={6}>
  <Carousel fade style={{backgroundColor:"lightgrey"}}>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={bg1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={bg2}
            alt="Second slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={bg3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  </Grid>
  
</Grid>
</Box>
        
    );
};

export default WatchHome;