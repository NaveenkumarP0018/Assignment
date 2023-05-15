import React, { useEffect } from "react";
import "../../Css/header.css";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../../Images/white-logo.svg";
import { Link } from "react-router-dom"
const Header = () => {
    const openMenuHandler = () => {
        document.querySelector(".main-menu").classList.add("show");
        document.querySelector(".main-menu").classList.remove("hide");
    };

    const closeMenuHandler = () => {
        document.querySelector(".main-menu").classList.remove("show");
        document.querySelector(".main-menu").classList.add("hide");
    };
    useEffect(() => {
        document.querySelector(".main-menu").classList.add("hide");
    }, []);

    return (
        <div className="site-header">
            <div className="site-header-bottom">
                <Row>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <div className="site-header-bottom-left">
                            <img className="site-header-logo" src={logo} />
                        </div>
                    </Col>
                    <Col lg={8} md={8} sm={6} xs={6}>
                        <div className="site-header-bottom-right">
                            <ul className="main-menu">
                                <li className="cancel-btn">
                                    <i
                                        className="fa fa-long-arrow-right"
                                        aria-hidden="true"
                                        onClick={() => closeMenuHandler()}
                                    ></i>
                                </li>
                                <li>
                                    <Link to="/home"> Home</Link>
                                </li>
                                <li>
                                    <Link to="/feature">Features</Link>
                                </li>
                                <li>
                                    <Link to="/overview">Overview</Link>
                                </li>
                                <li>
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/team">Team</Link>
                                </li>
                                <li>
                                    <Link to="/blogs">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu-side-bar">
                            <div className="icon menu-btn">
                                <i
                                    className="fa fa-bars"
                                    aria-hidden="true"
                                    onClick={() => openMenuHandler()}
                                ></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default (Header);
