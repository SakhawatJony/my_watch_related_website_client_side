import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navagation = () => {
  const {user,logout,} = useAuth();
    return (
        <>
        <Navbar bg="light" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home" className="text-black text-bold">Watch Shop</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link   as= {Link} to="/home">Home</Nav.Link>
    <Nav.Link   as= {Link} to="/shop">Shop</Nav.Link>
      <Navbar.Text className="text-black">
      {

user.email?
<div className="mx-auto d-flex" >
  <div className="mt-3">{user.displayName}</div>
  <Nav.Link  as= {Link}  to ="/dashbord"><button className="btn btn-outline-success">DashBord</button></Nav.Link>
  <Nav.Link  as= {Link}><button className="btn btn-outline-success" onClick={logout}>LogOut</button></Nav.Link>
  
</div> : <div className="">
  <Nav.Link as= {Link} to ="/login"><Button className="btn btn-outline-success" variant="outline-success">LogIn</Button></Nav.Link>
</div>

}
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Navagation;