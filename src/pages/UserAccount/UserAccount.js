import React from 'react';
import User from './User';

function UserAccount() {
  const isSelectLogin = window.location.pathname === '/login';

  const LOGIN_DATA = {
    title: '로그인을 위해 아이디를 입력하세요.',
    text: '계정이 없으신가요?',
    button: '로그인',
    url: '/signup',
  };
  const SIGNUP_DATA = {
    title: '이제 나위키의 멤버가 되어볼까요?',
    text: '이미 가입하셨나요?',
    button: '계정만들기',
    url: '/login',
  };
  return (
    <div className="userAccount">
      <User userData={isSelectLogin ? LOGIN_DATA : SIGNUP_DATA} />
    </div>
  );
}

export default UserAccount;
