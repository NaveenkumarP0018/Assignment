import React from 'react';
import PropTypes from 'prop-types';

const Unauthroised = () => {
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">403</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span></p>
                <p class="lead">
                    Sorry,Your Not Authroised user,Please Login
                </p>
            </div>
        </div>
    );
};

Unauthroised.propTypes = {};

export default Unauthroised;