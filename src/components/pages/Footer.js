import React from "react";
import "../../Css/footer.css";
import { Row, Col } from "react-bootstrap";
import logo from '../../Images/white-logo.svg';

const Footer = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div className="footer_left_content">
            <div className="site-header-bottom-left">
              <img className="site-header-logo" src={logo} />
            </div>
            <p>Making the world a better place through constructing elegant hierarchies.

            </p>
            <div className="socialIcon">
              <ul>
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
              </ul>
            </div>
            <p style={{paddingTop: "20px"}}>Designed and Developed by UIdeck</p>
          </div>
          <div className="footer__content">
            <Row>
              <Col>
                <h4>Services</h4>
                <ol>
                  <li>Marketing</li>
                  <li>Analytics</li>
                  <li>Commerce</li>
                  <li>Insights</li>
                  <li>Promotion</li>
                </ol>
              </Col>
              <Col>
                <h4>Services</h4>
                <ol>
                  <li>Marketing</li>
                  <li>Analytics</li>
                  <li>Commerce</li>
                  <li>Insights</li>
                  <li>Promotion</li>
                </ol>
              </Col>
              <Col>
                <h4>Services</h4>
                <ol>
                  <li>Marketing</li>
                  <li>Analytics</li>
                  <li>Commerce</li>
                  <li>Insights</li>
                  <li>Promotion</li>
                </ol>
              </Col>
              <Col>
                <h4>Services</h4>
                <ol>
                  <li>Marketing</li>
                  <li>Analytics</li>
                  <li>Commerce</li>
                  <li>Insights</li>
                  <li>Promotion</li>
                </ol>
              </Col>
            </Row>
          </div>
          {/* <div className="footer-copyright">
            <p>© 2023 Naveen Tek Systems. All rights reserved.</p>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Footer;
