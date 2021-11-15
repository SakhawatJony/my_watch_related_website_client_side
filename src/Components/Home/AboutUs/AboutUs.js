import React from 'react';
import { Col, Container, Image, Ratio, Row } from 'react-bootstrap';
import aboutbg from "../../../images/aboutbg.png";
import Bounce from 'react-reveal/Bounce';

const AboutUs = () => {
    return (
        <>   
           
        <Container>
            
            <Bounce>
            <h2 className="text-center mt-1 pt-5">About Us</h2>
     </Bounce>
         <Row className="mt-5">
         <Col xs={6} md={6}>
          
          <Bounce bottom>
          <h3> Our  Watch Shop </h3>
          <p>WatchShop’s history dates right back to 1991, when Sham Naib founded the jewellery retailer SDK Jewellers in the town which is still WatchShop’s home, Reading in Berkshire. When Sham’s son, Kishore Naib, joined the business in 2007, he established the website Watchshop.co.uk. Our official founding! The Naib family proudly sold the business in 2014, and we have since grown into the biggest independent watch retailer in the UK.</p>
          <h3> Our Brands </h3>
          <p>Here at WatchShop, we pride ourselves on being the No. 1 for Brands in the designer watch world. Stocking over 150 top brands, from luxury Versace to hip HUGO, plus brands designed by us such as Depth Charge (available exclusively at WatchShop, we might add), we are here to help you find your ideal watch, whoever you are buying for.

On top of our impressive brand collection, our buyers work hard to secure exclusive lines from a curation of our bestselling brands; the brands most loved by you. We love giving you, our customers, the VIP treatment by offering standout exclusives from the likes of Rotary, Guess and STORM London.</p>
          <h3> Our Promise to You </h3>
          <p>Wondering whether our watches are genuine, considering how good the prices are? No need to worry; we are official stockists for all of our brands*. Your watch will ship out of our very own warehouse in Reading, and before then, it will sit with the official manufacturer. No middle man here! This also means every watch you purchase with us will come in the original brand packaging and with a valid guarantee. Plus any extras, such as instructions and technical information (if applicable), will be present and correct.

</p>
    </Bounce>
       
        </Col>
         <Col  xs={6} md={6}><Image src= {aboutbg} thumbnail />
         <div  className="mb-3 p-1">
<Ratio aspectRatio="16x9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/2bchIORxEhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Ratio>
</div>
       </Col>
         </Row>
        </Container>
       
     
</>
    );
};

export default AboutUs;