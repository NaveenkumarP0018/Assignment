import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../Css/login.css';
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux';

const Login = (props) => {
    const navigate = useNavigate();
    const [userName, setUSerName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [alert, setAlert] = useState(false);
    const dispatch = useDispatch();
    const userDeatils = useSelector(state => state?.loginReducer?.loginDetails);
    const alertMessage = useSelector(state => state?.loginReducer?.alertMessage);
    useEffect(() => {
        dispatch({ type: "USER_AUTH", payload: false })
    }, [])
    const loginReq = () => {
        if (userName != '' && userPassword != '') {
            if (userDeatils?.email === userName && userDeatils?.password === +(userPassword)) {
                setAlert(false);
                navigate('/home');
                dispatch({ type: "WRONG_DETAILS", payload: false })
                dispatch({ type: "USER_AUTH", payload: true })
            } else {
                dispatch({ type: "WRONG_DETAILS", payload: true })
                dispatch({ type: "USER_AUTH", payload: false })
                setAlert(false);
            }
        } else {
            dispatch({ type: "WRONG_DETAILS", payload: false })
            dispatch({ type: "USER_AUTH", payload: false })
            setAlert(true)
        }
    }
    return (
        <div className="account-container">
            <div id="loginform">
                <div className="myAccount-container">
                    {alertMessage && <div className="alert alert-danger" role="alert">
                        Provided Details are Not Matched
                    </div>}
                    {alert && <div className="alert alert-danger" role="alert">
                        Please provide the UserName and Password
                    </div>}
                    <form action='#'>
                        <div className="myAccount-container-inner">
                            <div className="input-container">
                                <i className="fa fa-user icon"></i>
                                <input className="input-field" id="name" onChange={(e) => setUSerName(e.target.value)} type="text" placeholder="Username/Email" name="usrnm" />
                            </div>
                            <div className="input-container">
                                <i className="fa fa-key icon"></i>
                                <input className="input-field" id="password" onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder="Password" name="psw" />
                            </div>
                            <div className="clearfix">
                                <button type="button" onClick={() => loginReq()} className="signin">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {};

export default (Login);