import React from 'react';
import PropTypes from 'prop-types';
import overview1 from '../../Images/overview1.webp';
import overview2 from '../../Images/overview2.webp';
import "../../Css/featuresPage.css";

const Overview = () => {
    return (
        <div className="career-page">
            <div className="contract-tab-page current">
                <div className='row'>
                    <div class="col-lg-6 col-md-12 col-12 py-5">
                        <div class="info-text">
                            <h2>1,25,000 Customers Using The Application!</h2>
                            <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                                don't
                                let slow page speeds drive our innovative platform empowers anyone to convert clicks
                                ou'll
                                publish your first landing page in minutes.</p>
                            <div className='btn btn-primary'>
                                Get Started
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 overview-image">
                        <img src={overview1} alt="overview" />
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-6 col-md-12 col-12">
                        <img class="ss1" alt="#" src={overview2} />
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                        <h2>Seamless Loyalty</h2>
                        <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                            don't
                            let slow page speeds drive our innovative platform empowers anyone to convert clicks
                            ou'll
                            publish your first landing page in minutes.</p>
                    </div>
                </div>
                {/* <div class="container-fluid">
                    <div class="info-one">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-12">
                                <div class="info-text">
                                    <h2>1,25,000 Customers Using The Application!</h2>
                                    <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                                        don't
                                        let slow page speeds drive our innovative platform empowers anyone to convert clicks
                                        ou'll
                                        publish your first landing page in minutes.</p>
                                    <div class="button">
                                        <a href="javascript:void(0)" class="btn">Get Started</a>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-6 col-md-12 col-12">
                                <div class="info-image">
                                    <img alt="#" src={overview1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info-one style2">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-12">
                                <div class="info-image">
                                    <img class="ss1" alt="#" src={overview2} />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-12">

                                <div class="info-text  " >
                                    <div class="main-icon">
                                        <i class="lni lni-layout"></i>
                                    </div>
                                    <h2>Seamless Loyalty</h2>
                                    <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                                        don't
                                        let slow page speeds drive our innovative platform empowers anyone to convert clicks
                                        ou'll
                                        publish your first landing page in minutes.</p>
                                    <button class="btn btn-sm">
                                        <a href="javascript:void(0)" class="btn">Get Started</a>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

Overview.propTypes = {};

export default Overview;