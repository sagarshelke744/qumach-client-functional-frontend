import styled from "styled-components";

export const WhyChooseUsStyle = styled.section`
  width: 100%;
  min-height: 50%;
  margin: auto;
`;
export const LoginStyle = styled.div`
  .error {
    background: white;
    color: rgba(255, 0, 0, 0.8);
    padding: 0.5rem;
    margin: 1rem 0;
  }

  .login-section {
    height: 100vh;
  }
  .body {
    background: linear-gradient(#00b4db, #0083b0);
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: linear-gradient(#00b4db, #9198e5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  .login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
  }

  .login-box a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }

  .login-box a span {
    position: absolute;
    display: block;
  }

  .login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--light);
  padding: 8px 30px;
  width: 90%;
  border: none;
  border-radius: 2px;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 0.1em 0px 3px rgba(178, 186, 194, 0.9) inset;
`;
export const PrivacyStyle = styled.div`
  .privacy-item-box {
    width: 100%;
  }
  .privacy {
    margin: 4rem 7rem;
  }
  .privacy .content-post {
    margin: 0 auto;
  }
  .privacy .content-post p {
    margin: 1rem auto;
  }
`;
export const TermsUseStyle = styled.div`
  .privacy-item-box {
    width: 100%;
  }
  .privacy {
    margin: 4rem 7rem;
  }
  .privacy .content-post {
    margin: 0 auto;
  }
  .privacy .content-post p {
    margin: 1rem auto;
  }
`;
