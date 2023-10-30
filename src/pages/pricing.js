import React from 'react'
import Header from './header';
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import { TfiMedall, TfiWand } from 'react-icons/tfi';

const Pricing = () => {
    return (
        <>
            <Header />
            <section className='page-title bg-1'>
                <Container className='w-1140'>
                    <div className="row">
                        <div className="col-12 block text-center">
                            <div className="text2 ">
                                <span className='text-white'>Our pricing</span>
                                <h1 className='mb-4'>Pricing Package</h1>
                                <ul className='list-inline'>
                                    <li className='list-inline-item'>
                                        <a href="" className='text-white'>Home</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span class="text-white">/</span>
                                    </li>
                                    <li class="text-white-50 list-inline-item">Our pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='section intro'>
                <Container className='w-1140'>
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="section-title-2 pt-5">
                                <span className='text'>We are creative</span>
                                <h2 className='mt-3'>We provide best solution to client with their business problem </h2>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ marginLeft: "auto" }}>
                            <div className="row">
                                <div className="col-6">
                                    <div class="intro-item mb-4 mb-lg-0">
                                        <TfiWand />
                                        <h4 class="mt-4">Modern &amp; Responsive design</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aspernatur.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="intro-item mb-4 mb-lg-0">
                                        <TfiMedall />
                                        <h4 class="mt-4">Awarded licensed company</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aspernatur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='section-2 pricing bg-gray position-relative'>
                <div className="hero-img bg-overlay h70">
                    <Container className='w-1140'>
                        <div className="row  justify-content-center">
                            <div className="col-7 text-center block">
                                <div className="section-title">
                                    <span className='text-white fs-bold'>Our Pricing</span>
                                    <h2 className='mt-3 content-title text-white'>No hidden Charges.Choose <br />YourPerfect Plan</h2>
                                </div>
                            </div>

                        </div>

                    </Container>
                </div>
            </section>
            <section className='basic' style={{ padding: "0px" }}>
                <Container className='w-1140'>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="card text-center mb-md-0 mb-3">
                                <div class="card-body py-5">
                                    <div class="pricing-header mb-5">
                                        <h5 class="font-weight-normal mb-3">Free</h5>
                                        <h1>$0</h1>
                                        <p class="text-muted">Per User / Month</p>
                                    </div>
                                    <strong>Includes:</strong>
                                    <ul class="list-unstyled-2 lh-45 mt-3 text-black">
                                        <li>- Up to 1 User</li>
                                        <li>- Max 100 Item</li>
                                        <li>- 500 Queries</li>
                                        <li>- Basic Statistics</li>
                                    </ul>
                                    <button type="button" class="btn btn-success mt-3">Download Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center mb-md-0 mb-3">
                                <div class="card-body py-5">
                                    <div class="pricing-header mb-5">
                                        <h5 class="font-weight-normal mb-3">Basic</h5>
                                        <h1>$12</h1>
                                        <p class="text-muted">Per User / Month</p>
                                    </div>
                                    <strong>Includes:</strong>
                                    <ul class="list-unstyled-2 lh-45 mt-3 text-black">
                                        <li>- Up to 5 User</li>
                                        <li>- Max 1000 Item</li>
                                        <li>- 500 Queries</li>
                                        <li>- Standard Statistics</li>
                                    </ul>
                                    <button type="button" class="btn btn-success-red mt-3">Signup Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center mb-md-0 mb-3">
                                <div class="card-body py-5">
                                    <div class="pricing-header mb-5">
                                        <h5 class="font-weight-normal mb-3">Premium</h5>
                                        <h1>$39</h1>
                                        <p class="text-muted">Per User / Month</p>
                                    </div>
                                    <strong>Includes:</strong>
                                    <ul class="list-unstyled-2 lh-45 mt-3 text-black">
                                        <li>- Unlimited User</li>
                                        <li>- Unlimited Item</li>
                                        <li>- Unlimited Queries</li>
                                        <li>- Full Statistics</li>
                                    </ul>
                                    <button type="button" class="btn btn-success mt-3">Download Now</button>
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
            <Footer />
        </>
    )
}

export default Pricing