import React from 'react';
import { Card, Col, Container, Row ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleShop = ({shop}) => {
    const {_id,img,shopName,price,des} = shop;
    return (
        <Container>
                <Col>
              <Card className="bg-light card-title border border-light rounded shadow-sm p-3 mb-5 bg-body rounded">
                <Card.Img className="card-img" src={img}/>
                <Card.Body className="text-right">
                  <Card.Title><h6>{shopName}</h6></Card.Title>
                  <Card.Text>
                    <h6>total cost <span>$</span>{price}</h6>
                    {des.slice(0,60)}
                  </Card.Text>
                  <Link to={`/shopdetails/${_id}`}><Button variant="outline-success " size="sm" className="rounded fw-bold btn text-center">Buy Now</Button></Link>
                </Card.Body>
              </Card>
            </Col>
                </Container>
    );
};

export default SingleShop;