import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import payment from "./../../../images/footer/payment.png";
import footerLogo from "../../../images/footer/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'
import {
  faEnvelope, faPhone,faMapMarkerAlt,} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div>
            <div className="text-black">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={6}>
              <div className=" my-2">
                <img width="120px" src={footerLogo} alt="" />
              </div>

              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">Feni,Dhaka,Bangladesh</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Official: wtchshop@gmail.com
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">
                  Emergency  shiping: 01927415399(Available:10:00AM to 10.00PM)
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink  to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/review">Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/packages">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord">DashBord</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="">
                <img
                  className="img-fluid"
                  src={payment}
                  alt="payment methods"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved by watch shops in
        2021
      </p>
    </div>
        </div>
    );
};

export default Footer;