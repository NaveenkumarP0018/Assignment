import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import mboleImg from '../../Images/hm.webp';
import '../../Css/homePage.css';

const Home = () => {
    return (
        <div className='homePage'>
            <Row>
                <Col>
                    <h1>A Powerful App For Your Business</h1>
                    <p>From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</p>
                    <Button className='btn'>App Store</Button>
                    <Button className='btn'>Google Play</Button>
                </Col>
                <Col>
                    <img src={mboleImg} />
                </Col>

            </Row>
            {/* <div style={{ backgroundColor: "white" }}>hhh</div> */}
        </div>
    );
};

Home.propTypes = {};

export default Home;