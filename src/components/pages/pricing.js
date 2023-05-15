import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import "../../Css/featuresPage.css";
const Pricing = () => {
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
                            }}>PRICING</h3>
                            <h1 className="fw-bold">Pricing Plan</h1>
                            <p className="lead text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                </section>
                <Row className='container'>
                    <Col className='col-lg-3 col-md-6 col-12' >
                        <div className="single-feature">
                            <h4 className="title">Hobby</h4>
                            <p className='text-bg-light'>All the basics for starting a new business.</p>
                            <div className="price">
                                <h2 className="amount">$12<span className="duration">/mo</span></h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn">Buy Enterprise</a>
                            </div>
                            <hr />
                            <div className="table-content">
                                <h4 className="middle-title">What's Included</h4>
                                <ul className="table-list">
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Cras justo odio.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Dapibus ac facilisis in.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Morbi leo risus.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Potenti felis, in cras ligula.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-feature">
                            <h4 className="title">Freelancer</h4>
                            <p>All the basics for starting a new business.</p>
                            <div className="price">
                                <h2 className="amount">$24<span className="duration">/mo</span></h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn">Buy Enterprise</a>
                            </div>
                            <hr />
                            <div className="table-content">
                                <h4 className="middle-title">What's Included</h4>
                                <ul className="table-list">
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Cras justo odio.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Dapibus ac facilisis in.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Morbi leo risus.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Potenti felis, in cras ligula.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-12">

                        <div className="single-feature">
                            <h4 className="title">Startup</h4>
                            <p>All the basics for starting a new business.</p>
                            <div className="price">
                                <h2 className="amount">$32<span className="duration">/mo</span></h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn">Buy Enterprise</a>
                            </div>
                            <hr />
                            <div className="table-content">
                                <h4 className="middle-title">What's Included</h4>
                                <ul className="table-list">
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Cras justo odio.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Dapibus ac facilisis in.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Morbi leo risus.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Potenti felis, in cras ligula.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-12">

                        <div className="single-feature">
                            <h4 className="title">Enterprise</h4>
                            <p>All the basics for starting a new business.</p>
                            <div className="price">
                                <h2 className="amount">$48<span className="duration">/mo</span></h2>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0)" className="btn">Buy Enterprise</a>
                            </div>
                            <hr />
                            <div className="table-content">
                                <h4 className="middle-title">What's Included</h4>
                                <ul className="table-list">
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Cras justo odio.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Dapibus ac facilisis in.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Morbi leo risus.</li>
                                    <li><i className="fa fa-check-circle" aria-hidden="true"></i> Potenti felis, in cras ligula.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </Row>
            </div >
        </div >
    );
};

Pricing.propTypes = {};

export default Pricing;