import React from 'react';
import PropTypes from 'prop-types';

import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import "../../Css/featuresPage.css";
import image1 from '../../Images/sampl1.webp';
import image2 from '../../Images/sample2.webp';
import image3 from '../../Images/sample3.webp';

const Team = () => {
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
                            }}>TEAM</h3>
                            <h1 className="fw-bold">Meat Our Team</h1>
                            <p className="lead text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                </section>
                <Row className='container'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={image1} class="card-img-top" alt="..." />
                                <div class="content">
                                    <div class="row align-items-center">
                                        <div class="col-lg-8 col-12">
                                            <div class="text">
                                                <h3><a href="javascript:void(0)">Michel</a></h3>
                                                <h5>Senior software Engineer</h5>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <ul class="social">
                                                <li><a href="javascript:void(0)"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                                </li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={image2} class="card-img-top" alt="..." />
                                <div class="content">
                                    <div class="row align-items-center">
                                        <div class="col-lg-8 col-12">
                                            <div class="text">
                                                <h3><a href="javascript:void(0)">John</a></h3>
                                                <h5>Senior Web Designer</h5>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <ul class="social">
                                                <li><a href="javascript:void(0)"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                                </li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={image3} class="card-img-top" alt="..." />
                                <div class="content">
                                    <div class="row align-items-center">
                                        <div class="col-lg-8 col-12">
                                            <div class="text">
                                                <h3><a href="javascript:void(0)">Leonard Krasner</a></h3>
                                                <h5>Full Stack Developer</h5>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <ul class="social">
                                                <li><a href="javascript:void(0)"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                                </li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
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

Team.propTypes = {};

export default Team;