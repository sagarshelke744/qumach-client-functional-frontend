import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate, Navigate, useLocation } from "react-router-dom";
import { LoginStyle, Button } from "./Page.style";
import { useDispatch, useSelector } from "react-redux";

import { RotatingLines, ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

import { userLogin } from "../features/thunks/FetchUsers"; 
// import Footer from "components/organisms/Footer";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(false);
  const { loading, error, user, userToken } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!error) return;
    if (error?.detail) setLoginError(error.detail);
    else setLoginError("Login Failed");
  }, [error]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLoginError(false);
  };

  if (user && userToken) {
    return <Navigate to="/dashboard" />;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ username, password }));
  };

  return (
    <>
      <LoginStyle>
        <div className="login-section body">
          <div className="login-container">
            <div class="login-box">
              <h2 >
                Login In Your Account
              </h2>

              {loginError && <div className="error">{loginError}</div>}

              <form className="form" onSubmit={onSubmit}>
                <div class="user-box">
                  <input
                    id="username"
                    label="username"
                   
                    required
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                  <label>Username</label>
                </div>
                <div class="user-box">
                  <input
                    id="password"
                    type="password"
                   
                    name="password"
                    required
                    value={password}
                    onChange={onChange}
                  />
                  <label>Password</label>
                </div>
                {loading ? (
                 
                  <ThreeDots 
                  height="80" 
                  width="80" 
                  radius="9"
                  color="#7ce0ff" 
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{textAlign: 'center', alignItems: 'center',
                  justifyContent: 'center'}}
                  wrapperClassName=""
                  visible={true}
                  />
                ) : (
                  <div className="form-button">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary">
                      Login
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </LoginStyle>
    </> //
  );
};

export default Login;


