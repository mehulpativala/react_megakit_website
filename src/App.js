import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaGithub, FaAngleRight, FaFillDrip, FaUser } from 'react-icons/fa';
import { TfiDesktop, TfiLayersAlt, TfiMedall, TfiLayers, TfiBarChart, TfiVector, TfiAndroid, TfiPencilAlt, TfiMobile, TfiTwitterAlt, TfiPinterest, TfiQuoteLeft } from 'react-icons/tfi'
import './App.css';
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from 'react-countup';
import Header from './pages/header';
import Footer from './pages/footer';
import Ourcompany from './pages/ourcompany';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Pricing from './pages/pricing';
import Services from './pages/services';
function BasicExample() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2, 
    autoplay:true,
    Default: 3000
  };
  return (
    <div>
      <Router>
        <Switch>
    <Route exact path='/'>
    <Header />
      <section className='slider'>
        <div class=" bg-dark text-white" >
          <div class="card-img-overlay mp">
            <Container className="align-items-center w-1140">
              <span className='letter'>Prepare For New Future</span>
              <h1 className='font mt-3 mb-5'>Our work is <br /> presentation of our <br />capabilities.</h1>
              <a href="button" className='btn btn-main btn-round-full' style={{ marginLeft: '0px', }}>Get Started <FaAngleRight className='mb-1' /></a>
            </Container >
          </div>
        </div>
      </section>
      <Container className='w-1140'>
        <div className="section-space">
          <div className='mt'>
            <span className='text'>We are creative & expert people</span>
            <h2 className='size mt-3 '>We work with business & provide <br />solution to client with their business <br /> problem</h2>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card" style={{ border: "none" }}>
              <TfiDesktop className='font-size ' />
              <div class="card-body">
                <h5 class="card-title ">Modern & Responsive design</h5>
                <p class="card-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ border: "none" }}>
              < TfiMedall className='font-size' />
              <div class="card-body">
                <h5 class="card-title ">Awarded licensed company</h5>
                <p class="card-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ border: "none" }}>
              <TfiLayersAlt className='font-size' />
              <div class="card-body">
                <h5 class="card-title  ">Build your website Professionally</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section>
        <div className='w-50'> </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 offset-md-0">
              <div className='about-content'>
                <div style={{ marginTop: "80px" }}>
                  <span className='text h-6' >What we are</span>
                  <h2 className='mt-3 mb-4 ' style={{ fontSize: "40px", fontWeight: "700", lineHeight: "50px" }}>We are dynamic team of  <br />creative people</h2>
                  <div class="about-content position-relative">
                    <FaFillDrip className='fontfamily' />
                    <h4 class="mb-3 pb fw-bold"> We are Perfect Solution</h4>
                    <p class="mb-5 pb">We provide consulting services in the area of IFRS and <br /> management reporting, helping
                      companies to reach their <br /> highest level. We optimize business processes, making them <br />easier.</p>
                    <a href="button" className='btn btn-main btn-round-full ' style={{ lineHeight: "1.5" }}>Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Container className='w-1140  border-secondary'>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className='mb-0'>
                  <span className='counter-stat font-weight-bold'>
                  <CountUp end={1730} />
                  </span>
                  <span className='fw-bold'> +</span>
                </h3>
                <p className='text-muted'> Project Done</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className='mb-0'>
                  <span className='counter-stat font-weight-bold'>
                  <CountUp end={125} />
                  </span>
                  <span className='fw-bold'>M</span>
                </h3>
                <p className='text-muted'> User Worldwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className='mb-0'>
                  <span className='counter-stat font-weight-bold'>
                  <CountUp end={39} />
                  </span>
                </h3>
                <p className='text-muted'>Availble Country</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className='mb-0'>
                  <span className='counter-stat font-weight-bold'>
                  <CountUp end={14} />
                  </span>
                </h3>
                <p className='text-muted'> Award Winner</p>
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
        </Container>
      </section>
      <section className='web-page'>
        <Container className='w-1140'>
          <div className="col-xl-5 col-lg-6">
            <div className="cta-item  bg-white p-5 rounded">
              <span className='text'>We create for you</span>
              <h2 className='mt-2 mb-4 fs-bold'>Entrust Your Project to Our Best Team of Professionals</h2>
              <p class="lead mb-4 fs-lighter">Have any project on mind? For immidiate support :</p>
              <h3><TfiMobile className='mobile' /><span className='number'>+23 876 65 455</span></h3>
            </div>
          </div>
        </Container>
      </section>
      <section className='scroll'>
        <Container className='w-1140'>
          <div className="row">
            <div className="col-lg-7 ">
              <div className="section-title-2">
                <span className='text'>Clients testimonial</span>
                <h2 className='mt-3 content-title'>Check what's our clients say about us</h2>
              </div>
            </div>
          </div>
        </Container>

        <Container className='w-1140'>
        <div>
        <Slider {...settings}>
       
          <div>
          <TfiQuoteLeft className='quote' />
          <p className='testimonial-text' >Quam maiores perspiciatis temporibus odio <br /> reiciendis error alias debitis atque
                  consequuntur <br /> natus iusto recusandae numquam corrupti facilis <br /> blanditiis.</p>
                  <div className='mb-1 text-capitalize fst-normal '>
                  <h5 className='fs-bold'>Thomas Johnson</h5>
                  <p className='slick-opa'>Excutive Director,themefisher</p>
                </div>
          </div>
          <div>
          <TfiQuoteLeft className='quote' />
          <p className='testimonial-text'>Consectetur adipisicing elit. Quam maiores <br /> perspiciatis temporibus odio reiciendis
                  error alias <br /> debitis atque consequuntur natus iusto recusandae <br /> .</p>
                <div className='mb-1  fst-normal'>
                  <h5 className='fs-bold'>Mickel hussy</h5>
                  <p className='slick-opa '>Excutive Director,themefisher</p>
                </div>
          </div>
          <div>
          <TfiQuoteLeft className='quote'/>
          <p className='testimonial-text'>Quam maiores perspiciatis temporibus odio <br /> reiciendis error alias debitis atque
						consequuntur <br /> natus iusto recusandae numquam corrupti.</p>
                  <div className='mb-1 text-capitalize fst-normal'>
                  <h5 className='fs-bold'>James Watson</h5>
                  <p className='slick-opa'>Excutive Director,themefisher</p>
                </div>
          </div>
          <div>
          <TfiQuoteLeft className='quote' />
          <p className='testimonial-text'>Consectetur adipisicing elit. Quam maiores <br /> perspiciatis temporibus odio reiciendis
                  error alias <br /> debitis atque consequuntur natus iusto recusandae <br /> .</p>
                <div className='mb-1  fst-normal '>
                  <h5 className='fs-bold'>Mickel hussy</h5>
                  <p className='slick-opa '>Excutive Director,themefisher</p>
                </div>
          </div>
        </Slider>
      </div>
        </Container>
      </section>
      <section className='parallex'>
        <Container className='w-1140 mpr'>
          <div className="row row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title-2">
                <span class="text">Latest News</span>
                <h2 class="mt-3 content-title text-white">Latest articles to enrich <br />knowledge</h2>
              </div>
            </div>
          </div>
          <Container className='w-1140'>
            <div class="card-group">
              <div class="card bg-transparent border-0">
                <img src="https://demo.themefisher.com/megakit/images/blog/1.jpg" class="img-fluid " alt="" />
                <div class="card-body">
                  <div class="blog-item-meta">
                    <a href="design" class="text-white-50">Design<span class="ml-2 mr-2">/</span></a>
                    <a href="ui/xi" class="text-white-50">Ui/Ux<span class="ml-2">/</span></a>
                    <a href="admin" class="text-white-50 ml-2"><FaUser className='media' />admin</a>
                  </div>
                  <p class="text-white test">How to improve design with typography?
                  </p>
                  <Button variant="dark" className='text-light rounded-pill text-uppercase pm hover2 mt-4 transparent'>learn more</Button>{' '}
                </div>
              </div>
              <div class="card  bg-transparent border-0">
                <img src="https://demo.themefisher.com/megakit/images/blog/2.jpg" class="img-fluid " alt="" />
                <div class="card-body mt-2">
                  <div class="blog-item-meta">
                    <a href="design" class="text-white-50">Design<span class="ml-2 mr-2">/</span></a>
                    <a href="ui/xi" class="text-white-50">Ui/Ux<span class="ml-2">/</span></a>
                    <a href="admin" class="text-white-50 ml-5"><FaUser className='media' />admin</a>
                  </div>
                  <p class="text-white test">Interactivity design may connect consumer</p>
                  <Button variant="dark" className='text-light rounded-pill text-uppercase pm hover2  mt-4 transparent'>learn more</Button>{' '}

                </div>
              </div>
              <div class="card bg-transparent border-0">
                <img src="https://demo.themefisher.com/megakit/images/blog/3.jpg" class="img-fluid" alt="" />
                <div class="card-body">
                  <div class="blog-item-meta">
                    <a href="design" class="text-white-50">Design<span class="ml-2 mr-2">/</span></a>
                    <a href="ui/xi" class="text-white-50">Ui/Ux<span class="ml-2">/</span></a>
                    <a href="admin" class="text-white-50 ml-2"><FaUser className='media' />admin</a>
                  </div>
                  <p class="text-white test">Marketing Strategy to bring more affect</p>
                  <Button variant="dark" className='text-light rounded-pill text-uppercase pm hover2  mt-4  transparent'>learn more</Button>{' '}
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </section>
      <section class=" position-relative" style={{ padding: "0px" }}>
        <Container className='w-1140 mehul'>
          <div class="cta-block-2 bg-gray p-5 rounded border-1">
            <div class="row justify-content-center align-items-center ">
              <div class="col-lg-7">
                <span class="text">For Every type business</span>
                <h2 class="mt-2 mb-4 mb-lg-0">Entrust Your Project to Our Best <br />Team of Professionals</h2>
              </div>
              <div class="col-lg-4">
                <a href="contact.html" class="btn btn-main btn-round-full float-lg-right ">Contact Us</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </Route>
      <Route  path='/ourcompany'> 
      <Ourcompany />
      </Route>
      <Route path='/pricing'>
<Pricing/>
      </Route>
      <Route path='/services'>
<Services/>
      </Route>
     </Switch>
      </Router>
    </div>
  );
}
export default BasicExample;
