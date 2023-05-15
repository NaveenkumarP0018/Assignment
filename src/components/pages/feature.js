import React from 'react';
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import "../../Css/featuresPage.css";

const Feature = () => {
    return (
        <>
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
                                }}>FEATURES</h3>
                                <h1 className="fw-bold">Your Experience Gets Better And Better Over Time.</h1>
                                <p className="lead text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </section>
                    <Row className='container'>
                        <Col className='col-lg-4 col-md-6 col-12' >
                            <div className="single-feature">
                                <i className="fa fa-cloud-upload" id="icon" aria-hidden="true"></i>
                                <h3>Push to Deploy</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a
                                    page at its layout.</p>
                            </div>
                        </Col>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-feature ">
                                <i className="fa fa-lock" id="icon" aria-hidden="true"></i>
                                <h3>SSL Certificates</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a
                                    page at its layout.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-feature">
                                <i className="fa fa-refresh" id="icon" aria-hidden="true"></i>
                                <h3>Simple Queues</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a
                                    page at its layout.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-feature">
                                <i className="fa fa-shield" id="icon" aria-hidden="true"></i>
                                <h3>Advanced Security</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a
                                    page at its layout.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-feature" >
                                <i className="fa fa-cog" id="icon" aria-hidden="true"></i>
                                <h3>Powerful API</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a
                                    page at its layout.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-feature">
                                <i className="fa fa-database" id="icon" aria-hidden="true"></i>
                                <h3>Database Backups</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a
                                    page at its layout.</p>
                            </div>
                        </div>
                    </Row>
                </div >
            </div >
        </>
    )
}
export default Feature