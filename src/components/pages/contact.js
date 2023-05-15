import React from "react";
import "../../Css/contactPage.css";
import { Row, Col, Card, Button } from "react-bootstrap";

const ContactPage = () => {
    // back to top button
    const backToTopHandler = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    return (
        <>
            <div>
                <button
                    id="backtotopbtn"
                    title="Go to top"
                    onClick={() => backToTopHandler()}
                >
                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                </button>
            </div>
            <div className="contact-page">
                {/* ================================= contact-page-section-2-start ==========================  */}
                <div className="contact-page-section-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="contact-page-section-2-left">
                                <h3>// CONTACT DETAILS</h3>
                                <h1>New Case?<br />
                                    Send Message Us</h1>
                                <p>
                                    Just send us your questions or concerns to starting a new project.
                                </p>
                                <Card id="card">
                                    <Row>
                                        <Col lg={1}>
                                            <div className="card-icon">
                                                <i className="fa fa-globe" aria-hidden="true"></i>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="cardContent">
                                                <p>HAVE A QUESTION?</p>
                                                <h4>
                                                    +888 445 55 678
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card id="card">
                                    <Row>
                                        <Col>
                                            <div className="cardContent">
                                                <h4>Our Mailbox:</h4>
                                                <p>info@aspenteksystems.com</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>{" "}
                                <Card id="card">
                                    <Row>
                                        <Col>
                                            <div className="cardContent">
                                                <p>Monday - Friday:<br />
                                                    9.00 - 6.00<br />
                                                    Sunday & Public Holidays (Closed)</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                                <p>Request A Call Back</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="contact-page-section-2-right">
                                <div className="contact-section-2-form">
                                    <input
                                        id="form-input"
                                        name="name"
                                        placeholder="Your Name *"
                                    />
                                    <input
                                        id="form-input"
                                        name="email"
                                        placeholder="Your Email *"
                                    />
                                    <textarea
                                        id="form-input-text"
                                        name="message"
                                        placeholder="message.. *"
                                    />
                                    <Button className="form-btn">send Message</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};
export default ContactPage;