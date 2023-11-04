import React from 'react';
import Header from './header';
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import { TfiCheck, TfiFlag, TfiLayers, TfiLinkedin, TfiMedallAlt, TfiQuoteLeft } from 'react-icons/tfi';
import CountUp from 'react-countup';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import team1 from '../image/team-1.jpg';
import team2 from '../image/team-2.jpg';
import team3 from '../image/team-3.jpg';
import team4 from '../image/team-4.jpg';
import team5 from '../image/team-5.jpg';
import team6 from '../image/team-6.jpg';




const Ourcompany = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        Default: 3000

    };
    return (
        <>
            <Header />
            <section className='page-title bg-1'>
                <Container className='w-1140'>
                    <div className="row company">
                        <div className="col-12 block text-center">
                            <div className="text2 ">
                                <span className='text-white'>About Us</span>
                                <h1 className='mb-42'>Our Company</h1>
                                <ul className='list-inline'>
                                    <li className='list-inline-item' >
                                        <a href="/" className='text-white'>Home</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span class="text-white">/</span>
                                    </li >
                                    <li class="text-white-50 list-inline-item">About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='about-2'>
                <Container className='w-1140'>
                    <div className="row">
                        <div className="col-6">
                            <div className="about-item">
                                <span className='text'>
                                    What we are
                                </span>
                                <h2 className=' mt-3 mb-4 content-title'>We are dynamic team of creative people</h2>
                                <p class="mb-5">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
                                <a href="button" class="btn btn-main btn-round-full m-0">Get Started</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about-item-img">
                                <img src='./image/home-7.jpg' alt="" className='img-fluid-2' />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='about-info'>
                <Container className='w-1140'>
                    <div className="row">
                        <div className="col-4">
                            <div className="about-info-item">
                                <h3>
                                    <span className='text-color-2'>01.</span>
                                    Our Mission
                                </h3>
                                <p>llum similique ducimus accusamus laudantium  <br />praesentium, impedit quaerat, itaque maxime <br />sunt deleniti voluptas distinctio .</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="about-info-item">
                                <h3>
                                    <span className='text-color-2'>02.</span>
                                    Vission
                                </h3>
                                <p>llum similique ducimus accusamus laudantium  <br />praesentium, impedit quaerat, itaque maxime <br />sunt deleniti voluptas distinctio .</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="about-info-item">
                                <h3>
                                    <span className='text-color-2 '>03.</span>
                                    Our Approach
                                </h3>
                                <p>llum similique ducimus accusamus laudantium  <br />praesentium, impedit quaerat, itaque maxime <br />sunt deleniti voluptas distinctio .</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='section-2 counter bg-counter'>
                <Container className='w-1140'>
                    <div className="row">
                        <div className="col-3">
                            <div className="counter-item text-center mb-5 mb-lg-0">
                                <TfiCheck className='icon-page-2' />
                                <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-bold"><CountUp end={1730} /></span> +</h3>
                                <p class="text-white-50">Project Done</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="counter-item text-center mb-5 mb-lg-0">
                                <TfiFlag className='icon-page-2' />
                                <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-bold"><CountUp end={125} /></span> M</h3>
                                <p class="text-white-50">User Worldwide</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="counter-item text-center mb-5 mb-lg-0">
                                <TfiLayers className='icon-page-2' />
                                <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-bold"><CountUp end={39} /></span></h3>
                                <p class="text-white-50">Availble Country</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="counter-item text-center mb-5 mb-lg-0">
                                <TfiMedallAlt className='icon-page-2' />
                                <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-bold"><CountUp end={14} /></span></h3>
                                <p class="text-white-50">Award Winner </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='section-2 team'>
                <Container className='w-1140'>
                    <div className="row justify-content-center">
                        <div className="col-7 text-center">
                            <div className="section-title-2">
                                <span className='text'>Our Team</span>
                                <h2 className='mt-3 content-title'>Expert Team member to get <br />best service</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="team-item-wrap mb-5">
                                <div className="team-item position-relative">
                                    <img src={team1} alt="" className='img-fluid-2 w-100' />
                                    <div class="team-img-hover">
                                        <ul class="team-social list-inline-2">
                                            <li class="list-inline-item">
                                                <a href="https://www.facebook.com/themefisher" class="facebook"><FaFacebookF /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://twitter.com/themefisher" class="twitter"><FaTwitter /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://www.instagram.com/themefisher/" class="instagram"><FaInstagram /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://themefisher.com/" class="linkedin"><TfiLinkedin /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-item-content ">
                                    <h4 class="mt-3 mb-0 text-capitalize">Justin hammer</h4>
                                    <p>Digital Marketer</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="team-item-wrap position-relative mb-5">
                                <div className="team-item position-relative">
                                    <img src={team2} alt="" className='img-fluid-2 w-100' />
                                    <div class="team-img-hover">
                                        <ul class="team-social list-inline-2">
                                            <li class="list-inline-item">
                                                <a href="https://www.facebook.com/themefisher" class="facebook"><FaFacebookF /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://twitter.com/themefisher" class="twitter"><FaTwitter /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://www.instagram.com/themefisher/" class="instagram"><FaInstagram /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://themefisher.com/" class="linkedin"><TfiLinkedin /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-item-content">
                                    <h4 class="mt-3 mb-0 text-capitalize">Jason roy</h4>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-4">
                            <div className="team-item-wrap mb-5">
                                <div className="team-item position-relative">
                                    <img src={team3} alt="" className='img-fluid-2 w-100' />
                                    <div class="team-img-hover">
                                        <ul class="team-social list-inline-2">
                                            <li class="list-inline-item">
                                                <a href="https://www.facebook.com/themefisher" class="facebook"><FaFacebookF /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://twitter.com/themefisher" class="twitter"><FaTwitter /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://www.instagram.com/themefisher/" class="instagram"><FaInstagram /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://themefisher.com/" class="linkedin"><TfiLinkedin /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-item-content">
                                    <h4 class="mt-3 mb-0 text-capitalize">Henry oswald</h4>
                                    <p>Developer</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-4">
                            <div className="team-item-wrap mb-5">
                                <div className="team-item position-relative">
                                    <img src={team4} alt="" className='img-fluid-2 w-100' />
                                    <div class="team-img-hover">
                                        <ul class="team-social list-inline-2">
                                            <li class="list-inline-item">
                                                <a href="https://www.facebook.com/themefisher" class="facebook"><FaFacebookF /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://twitter.com/themefisher" class="twitter"><FaTwitter /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://www.instagram.com/themefisher/" class="instagram"><FaInstagram /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://themefisher.com/" class="linkedin"><TfiLinkedin /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-item-content">
                                    <h4 class="mt-3 mb-0 text-capitalize">David Williams</h4>
                                    <p>Senior Marketer</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="team-item-wrap mb-5">
                                <div className="team-item position-relative">
                                    <img src={team5} alt="" className='img-fluid-2 w-100' />
                                    <div class="team-img-hover">
                                        <ul class="team-social list-inline-2">
                                            <li class="list-inline-item">
                                                <a href="https://www.facebook.com/themefisher" class="facebook"><FaFacebookF /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://twitter.com/themefisher" class="twitter"><FaTwitter /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://www.instagram.com/themefisher/" class="instagram"><FaInstagram /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://themefisher.com/" class="linkedin"><TfiLinkedin /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-item-content">
                                    <h4 class="mt-3 mb-0 text-capitalize">Peter Odin</h4>
                                    <p>App Developer</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="team-item-wrap mb-5 ">
                                <div className="team-item position-relative">
                                    <img src={team6} alt="" className='img-fluid-2 w-100' />
                                    <div class="team-img-hover">
                                        <ul class="team-social list-inline-2">
                                            <li class="list-inline-item">
                                                <a href="https://www.facebook.com/themefisher" class="facebook"><FaFacebookF /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://twitter.com/themefisher" class="twitter"><FaTwitter /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://www.instagram.com/themefisher/" class="instagram"><FaInstagram /></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="https://themefisher.com/" class="linkedin"><TfiLinkedin /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-item-content ">
                                    <h4 class="mt-3 mb-0 text-capitalize">David Spensor</h4>
                                    <p>Project Manager</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </Container>
            </section>
            <div className="section-2 testimonial bg-gray">
                <Container className='w-1140'>

                    <div className="row justify-content-center">
                        <div className="col-7 text-center">
                            <div className="section-title-2">
                                <span className='text'>
                                    Clients testimonial
                                </span>
                                <h2 className='mt-3 content-title'>Check what's our clients say about us</h2>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
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
                                <TfiQuoteLeft className='quote' />
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
            </div>
            <Footer />


        </>
    )
}
export default Ourcompany