import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.scss';

function User({ userData: { title, text, url, button } }) {
  const [inputValue, setInputValue] = useState({
    nickname: '',
    password: '',
    name: '',
    birth: '',
  });
  const navigate = useNavigate();
  const [termsAgree, setTermsAgree] = useState(false);

  // id, pw 유효성 검사
  const idExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const pwExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  const validId = idExp.test(inputValue.nickname);
  const validPw = pwExp.test(inputValue.password);

  const handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // fetch
  const loginAccess = () => {
    fetch('http://10.58.52.132:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        nickname: inputValue.nickname,
        password: inputValue.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'login success') {
          navigate('/main');
        } else {
          alert('아이디와 비밀번호를 확인해주세요');
        }
      });
  };
  const signUpAccess = () => {
    fetch('http://10.58.52.132:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: inputValue.name,
        nickname: inputValue.nickname,
        password: inputValue.password,
        birth: inputValue.birth,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        navigate('/main');
      });
  };

  const validator = validId && validPw && termsAgree;
  // login, signup data
  const LOGIN_DATA = [
    {
      id: 1,
      type: 'text',
      name: 'nickname',
      placeholder: '아이디',
      valid: validId,
      validTrueText: '8자이상 영어, 숫자 포함',
      validFalseText: '8자이상 영어, 숫자 포함하세요',
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      placeholder: '비밀번호',
      valid: validPw,
      validTrueText: '8자 이상 영문, 숫자, 특수문자 포함',
      validFalseText: '8자 이상 영문, 숫자, 특수문자 포함하세요',
    },
  ];

  return (
    <div className="signup">
      <div className="signupInner">
        <div className="logo">
          <img src="/images/nike.png" alt="logo" />
        </div>
        <h2>{title}</h2>
        <form className="signupInput">
          {/* 회원가입 이름, 생년월일 */}
          {button !== '로그인' && (
            <div className="singupName">
              {SIGNUP_DATA.map(signdata => {
                return (
                  <input
                    key={signdata.id}
                    type={signdata.type}
                    placeholder={signdata.placeholder}
                    name={signdata.name}
                    min={signdata.min}
                    max={signdata.max}
                    onChange={handleInput}
                  />
                );
              })}
            </div>
          )}
          {/* 공통 아이디, 비밀번호 */}
          {LOGIN_DATA.map(lodata => {
            return (
              <React.Fragment key={lodata.id}>
                <input
                  type={lodata.type}
                  placeholder={lodata.placeholder}
                  name={lodata.name}
                  onChange={handleInput}
                />
                {button === '계정만들기' && (
                  <span className={lodata.valid ? 'green' : 'red'}>
                    {lodata.valid
                      ? lodata.validTrueText
                      : lodata.validFalseText}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </form>

        {/* 이용약관 */}
        <div className="serviceTerms">
          {button === '계정만들기' && (
            <>
              <input
                type="checkbox"
                id="terms"
                onClick={() => {
                  setTermsAgree(!termsAgree);
                }}
              />
              <label htmlFor="terms">
                <span>
                  나위키의 개인 정보 처리 방침 및 이용약관에 동의합니다.
                </span>
              </label>
            </>
          )}
        </div>
        <button
          className="signupBtn"
          disabled={
            button === '로그인' ? !(inputValue.password.length > 0) : !validator
          }
          onClick={button === '로그인' ? loginAccess : signUpAccess}
        >
          {button}
        </button>
        <Link to={url} className="link">
          {text}
        </Link>
      </div>
    </div>
  );
}

export default User;

const SIGNUP_DATA = [
  {
    id: 1,
    type: 'text',
    name: 'name',
    placeholder: '이름',
  },
  {
    id: 2,
    type: 'date',
    name: 'birth',
    placeholder: '생년월일',
    min: '1900-01-01',
    max: '2022-11-16',
  },
];
