import "./App.css";
import Home from "./components/Home";
import Diary from "./components/Diary";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Test from "./components/Test";
import DiaryItem from "./components/DiaryItem";
import UserJoin from "./components/UserJoin";
import Login from "./components/Login";
import { CookiesProvider } from 'react-cookie';



function App() {


  return (
    <>
    <CookiesProvider>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/diary" element={<Diary />} >
              <Route path="/diary/:diary_id" element={<DiaryItem/>} />
            </Route>            
            <Route path="/test" element={<Test />} />
            <Route path="/join" element={<UserJoin/>} />
          </Routes>
        </Router>
    </CookiesProvider>
     
    </>
  );
}

// BrowserRouter : Routes 의 부모컴포넌트. 라우터의 컨텍스트(라우팅 기능)을 제공
// Routes : Route 를 묶는 부모컴포넌트
// Route : 개별 컴포넌트의 path 지정가능

export default App;
