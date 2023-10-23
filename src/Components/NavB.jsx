import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from "../Images/logo.png"
import "../Styles/Navbar.css"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"


function NavB() {
  return (
    <Navbar expand="lg" className="nav-color p-3" sticky="top"  >

      <Container fluid>

        <Navbar.Brand to="#" className='navbar-img ps-md-5' >
       
       <img src={img} alt="" />

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />


        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 ms-auto px-5 me-4"
            style={{ maxHeight: '100px',fontSize:"1.3vw" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/"  className="me-3 fs-6 custom-nav-link"  >Home</Nav.Link>
            <Nav.Link as={Link} to="/erpmodule"  className="me-3 fs-6 custom-nav-link" >ERP modules</Nav.Link>

            <NavDropdown title="Features" id="navbarScrollingDropdown" className="me-3 fs-6 custom-nav-link">
              <NavDropdown.Item to="#action3">School Mobile App</NavDropdown.Item>
              <NavDropdown.Item to="#action4">
                Teachers Mobile App
              </NavDropdown.Item>
              
              {/* <NavDropdown.Divider />
              <NavDropdown.Item to="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            

            <Nav.Link as={Link} to="/blog"  className="me-3 fs-6 custom-nav-link">Blog</Nav.Link>
            <Nav.Link as={Link} to="/aboutus"  className="me-3 fs-6 custom-nav-link">About us</Nav.Link>


            <Nav.Link as={Link} to="/contact"  className="me-5 fs-6 custom-nav-link">Contact</Nav.Link>

           <Button  className='btn fs-6'  variant="outline-dark">Download App</Button>

           



          
          </Nav>
          
        
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavB;