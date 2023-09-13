import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import BackButton from '../components/BackButton';

function Main(props) {
  const isLoggedIn = props.inLoggedIn;
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     // 로그인되어 있지 않으면 Intro 페이지로 리디렉션합니다.
  //     navigate('/intro');
  //   }
  // }, []);

  return (
    <div>
      <p>Main Page</p>
      <div>
        <Link to="/koreanlearning">
          <button>한국어 학습</button>
        </Link>
        <Link to="/quiz">
          <button>퀴즈</button>
        </Link>
        <Link to="/withbuddy">
          <button>버디랑 놀기</button>
        </Link>

        <BackButton />
      </div>
    </div>
  );
}

export default Main;