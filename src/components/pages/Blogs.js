import React from 'react';
import PropTypes from 'prop-types';


import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import "../../Css/featuresPage.css";
import blog1 from '../../Images/blog1.webp';
import blog2 from '../../Images/blog2.webp';
import blog3 from '../../Images/blog3.webp';
import blog4 from '../../Images/blog4.webp';
import blog5 from '../../Images/blog5.webp';
import blog6 from '../../Images/blog6.webp';
const Blogs = () => {
    return (
        <div className="career-page">
            <div className="contract-tab-page current">
                <section className="py-3 text-center container">
                    <div className="row py-lg-1">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h3 style={{
                                fontSize: "15px",
                                fontWeight: "600",
                                display: "block",
                                marginBottom: "8px",
                                color: "#23BBB7",
                                textTransform: "uppercase"
                            }}>BLOGS</h3>
                            <h1 className="fw-bold">Our Latest News</h1>
                            <p className="lead text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                </section>
                <Row className='container'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={blog1} class="card-img-top" alt="..." />
                                <div class="blog-content">
                                    <a class="category" href="javascript:void(0)">Blog</a>
                                    <div className='heading'>
                                        <a href="blog-single-sidebar.html">Boost your conversion rate</a>
                                    </div>
                                    <p className='text-muted'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore
                                        magna.</p>
                                    <div class="autor">
                                        <a href="javascript:void(0)"><img alt="#" data-pagespeed-url-hash="554129358" src={blog4} onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" /></a>
                                        <a href="javascript:void(0)" class="name">Roel Aufderhar</a>
                                        <ul class="meta-content">
                                            <li>
                                                <a href="javascript:void(0)">Mar 15,2023</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">5 min read</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={blog2} class="card-img-top" alt="..." />
                                <div class="blog-content">
                                    <a class="category" href="javascript:void(0)">Video</a>
                                    <div className='heading'>
                                        <a href="blog-single-sidebar.html">How to use search engine</a>
                                    </div>
                                    <p className='text-muted'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore
                                        magna.</p>
                                    <div class="autor">
                                        <a href="javascript:void(0)"><img alt="#" src={blog5} /></a>
                                        <a href="javascript:void(0)" class="name"> Jenifer Zuliya</a>
                                        <ul class="meta-content">
                                            <li>
                                                <a href="javascript:void(0)">Feb 10,2023</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">7 min read</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={blog3} class="card-img-top" alt="..." />
                                <div class="blog-content">
                                    <a class="category" href="javascript:void(0)">Marketing</a>
                                    <div className='heading'>
                                        <a href="blog-single-sidebar.html">Awesome ways to boost sales</a>
                                    </div>
                                    <p className='text-muted'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore
                                        magna.</p>
                                    <div class="autor">
                                        <a href="javascript:void(0)"><img alt="#" src={blog6} /></a>
                                        <a href="javascript:void(0)" class="name">Roel Aufderhar</a>
                                        <ul class="meta-content">
                                            <li>
                                                <a href="javascript:void(0)">Jan 20,2023</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">10 min read</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div >
        </div >
    );
};

Blogs.propTypes = {};

export default Blogs;