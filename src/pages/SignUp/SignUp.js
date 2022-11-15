import React from 'react';

function SignUp() {
  return (
    <div className="page">
      <div className="signUpForm">
        <div className="logo">
          <img
            className="nikeLogo"
            src="/images/signup/nike.png"
            alt="나이키로고"
          />
        </div>
        <div className="infoMent" />
        <div className="fullNameForm">
          <div className="firstName" />
          <div className="lastName" />
        </div>
        <div className="password" />
        <div className="passwordCheck" />
        <div className="passwordCheck" />
        <div className="birthDay" />
        <div className="check">
          <div className="checkBox">
            <input className="checkInput" />
          </div>
          <div className="agree" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
