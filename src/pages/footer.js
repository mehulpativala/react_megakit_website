import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaGithub, FaAngleRight, FaFillDrip, FaUser } from 'react-icons/fa';
import { TfiDesktop, TfiLayersAlt, TfiMedall, TfiLayers, TfiBarChart, TfiVector, TfiAndroid, TfiPencilAlt, TfiMobile, TfiTwitterAlt, TfiPinterest, TfiQuoteLeft } from 'react-icons/tfi'

import "slick-carousel/slick/slick.css";
const Footer = () => {
  return (
    
    <footer className='footer-section '>
    <Container className='w-1140 '>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget">
            <h4 className='text-capitalize mb-4 fs-bold'>Company</h4>
            <div className="list-unstyled footer-menu lh-35">
              <ul class="list-unstyled footer-menu lh-35">
                <li><a href="about.html">Terms &amp; Conditions</a></li>
                <li><a href="about.html">Privacy Policy</a></li>
                <li><a href="cobtact.html">Support</a></li>
                <li><a href="cobtact.html">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="widget">
            <h4 className='text-capitalize mb-4 fs-bold'>Quick Links</h4>
            <ul class="list-unstyled  footer-menu lh-35">
              <li><a href="about.html">About</a></li>
              <li><a href="about.html">Services</a></li>
              <li><a href="cobtact.html">Blogs</a></li>
              <li><a href="cobtact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
          <div className="widget">
            <h4 className='text-capitalize mb-4 fs-bold'>Subscribe Us</h4>
            <p className='dark'>Subscribe to get latest news <br /> article and resources</p>
            <form action="#" className="sub-form">
              <input type="text" className="form-control mb-4" placeholder="Subscribe Now ..." />
              <a href="subscribe" className="btn-last btn-small">Subscribe</a>
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="widget">
            <div className="logo">
              <h4 className='mega mb-4'>Mega<span className='danger'>kit.</span></h4>
              <h6 ><a href="mailto:support@gmail.com" className='mail'>Support@megakit.com</a></h6>
              <a href="tel:+23-345-67890"><span class="text-color h4">+23-456-6588</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-btm pt-4 ">
        <div class="row">
          <div class="col-lg-6">
            <div class="copyright" style={{ opacity: "0.9" }}>
              Copyright © 2020, Designed &amp; Developed by <a href="https://themefisher.com/" className='mail'>Themefisher</a>
            </div>
          </div>
          <div class="col-lg-6  text-lg-right">
            <ul class="list-inline footer-socials ">
              <li class="list-inline-item"><a href="https://www.facebook.com/themefisher"><FaFacebookF className='media' />Facebook</a></li>
              <li class="list-inline-item"><a href="https://twitter.com/themefisher"><TfiTwitterAlt className='media' />Twitter</a></li>
              <li class="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><TfiPinterest className='media' />Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </footer>
  )
}

export default Footer