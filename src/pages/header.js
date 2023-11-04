import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaGithub, FaAngleRight, FaFillDrip, FaUser } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "slick-carousel/slick/slick.css";
const Header = () => {
  return (
    <header >
      <Navbar expand="lg" className='bg border-bottom border-secondary'>
        <Container className='w-1140'>
          <Navbar.Brand href="#home" >
            <FaFacebookF className='color hover' />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <BsTwitter className='color hover' />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <FaGithub className='color hover' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
          <a href=" Call Us" className='color ' > Call Us :</a>
          <a href="support@gmail.com" >
            +23-345-67890
          </a>
          <a href="support@gmail.com" >
            <MdMail className='color' /> support@gmail.com
          </a>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg height">
        <Container className='w-1140'>
          <Navbar.Brand href="/" className='text-light hover mega'>Mega<span className='danger'>kit.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
              <Nav.Link href="/" className='text-danger text-uppercase '>Home</Nav.Link>
              <NavDropdown title="ABOUT" id="basic-nav-dropdown" className='hover'>
                <NavDropdown.Item href="ourcompany" className='hover1'>OUR COMPANY</NavDropdown.Item>
                <NavDropdown.Item href="pricing" className='hover1'>PRICING
                </NavDropdown.Item>
                <NavDropdown.Item href="/" className='hover1'>SUB MENU
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/services" className='text-light text-uppercase hover'>Services</Nav.Link>
              <Nav.Link href="/" className='text-light text-uppercase hover'>Portfolio</Nav.Link>
              <NavDropdown title="BLOG" id="basic-nav-dropdown" className='hover'>
                <NavDropdown.Item href="/" className='text-uppercase hover1'>Blog Grid</NavDropdown.Item>
                <NavDropdown.Item href="/" className='text-uppercase hover1'>blog with sidebar</NavDropdown.Item>
                <NavDropdown.Item href="/" className=' text-uppercase hover1'>
                  blog single
                </NavDropdown.Item>
                <NavDropdown.Item href="/" className='text-uppercase hover1'>
                  sub menu
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/" className='text-light text-uppercase hover'>Contact</Nav.Link>
              <Button variant="/" className='text-light rounded-pill text-uppercase pm hover2'>Get a quote</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header