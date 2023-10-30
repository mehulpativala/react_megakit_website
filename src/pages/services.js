import React from 'react'
import Header from './header';
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import { TfiDesktop, TfiLayersAlt, TfiMedall, TfiLayers, TfiBarChart, TfiVector, TfiAndroid, TfiPencilAlt, TfiMobile, TfiTwitterAlt, TfiPinterest, TfiQuoteLeft } from 'react-icons/tfi'

const Services = () => {
  return (
  <>
        <Header/>
        <section className='page-title bg-1'>
                <Container className='w-1140'>
                    <div className="row company">
                        <div className="col-12 block text-center">
                            <div className="text2 ">
                                <span className='text-white'>Our services</span>
                                <h1 className='mb-42'>What We Do</h1>
                                <ul className='list-inline'>
                                    <li className='list-inline-item'>
                                        <a href="/" className='text-white'>Home</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span class="text-white">/</span>
                                    </li >
                                    <li class="text-white-50 list-inline-item"> Our services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='border-top'>
        <Container className='w-1140'>
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title-2">
                <span class="text">Our Services</span>
                <h2 class="mt-3 content-title ">We provide a wide range of creative services </h2>
              </div>
            </div>
          </div>
          <div class="row  justify-content-center">
            <div class="col service-item mb-5">
              <div class="card " style={{ border: "none" }}>
                <TfiDesktop className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title">Web development.</h5>
                  <p class="card-text">A digital agency isn't here to replace <br /> your internal team, we're here to <br /> partner</p>
                </div>
              </div>
            </div>
            <div class="col service-item mb-5">
              <div class="card" style={{ border: "none" }}>
                <TfiLayers className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title">Interface Design.</h5>
                  <p class="card-text">A digital agency isn't here to replace br  your internal team, we're here to <br /> partner</p>
                </div>
              </div>
            </div>
            <div class="col service-item mb-5">
              <div class="card" style={{ border: "none" }}>
                <TfiBarChart className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title">Business Consulting.</h5>
                  <p class="card-text">A digital agency isn't here to replace <br /> your internal team, we're here to <br /> partner</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col service-item mb-5">
              <div class="card " style={{ border: "none" }}>
                <TfiVector className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title ">Branding.</h5>
                  <p class="card-text">A digital agency isn't here to replace  your internal team, we're here to  partner</p>
                </div>
              </div>
            </div>
            <div class="col service-item mb-5">
              <div class="card" style={{ border: "none" }}>
                <TfiAndroid className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title">App development.</h5>
                  <p class="card-text">A digital agency isn't here to replace <br />  your internal team, we're here to <br /> partner</p>
                </div>
              </div>
            </div>
            <div class="col service-item mb-5 ">
              <div class="card" style={{ border: "none" }}>
                <TfiPencilAlt className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title">Content creation.</h5>
                  <p class="card-text">A digital agency isn't here to replace <br /> your internal team, we're here to <br /> partner</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
          <div class="col service-item mb-5">
              <div class="card" style={{ border: "none" }}>
                <TfiLayers className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title">Interface Design.</h5>
                  <p class="card-text">A digital agency isn't here to replace br  your internal team, we're here to <br /> partner</p>
                </div>
              </div>
            </div>
            <div class="col service-item mb-5">
              <div class="card" style={{ border: "none" }}>
                <TfiBarChart className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title">Business Consulting.</h5>
                  <p class="card-text">A digital agency isn't here to replace <br /> your internal team, we're here to <br /> partner</p>
                </div>
              </div>
            </div>
            <div class="col service-item mb-5">
              <div class="card " style={{ border: "none" }}>
                <TfiVector className='service-item-i' />
                <div class="card-body">
                  <h5 class="card-title ">Branding.</h5>
                  <p class="card-text">A digital agency isn't here to replace  your internal team, we're here to  partner</p>
                </div>
              </div>
            </div>

          </div>
          
        </Container>
        <Container className='w-1140'>
                    <div className="cta-block  mt-5 p-5 rounded">
                        <div class="row block  justify-content-center align-items-center ">
                            <div class="col-lg-7 ">
                                <span class="text">For Every type business</span>
                                <h2 class="mt-2 text-white">Entrust Your Project to Our Best Team of Professionals</h2>
                            </div>
                            <div class="col-lg-4 text-center text-lg-right mt-4 mt-lg-0">
                                <a href="contact.html" class="btn btn-main btn-round-full">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </Container>
      </section>
      <Footer/>
  </>
  )
}

export default Services