import "./App.css";

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Test from "./pages/Test";
import DiaryItem from "./pages/DiaryItem";
import UserJoin from "./pages/UserJoin";
import Todo from "./pages/Todo";
import TodoItem from "./pages/TodoItem";
import TodoEdit from "./pages/TodoEdit";
import Login from "./pages/Login";
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
            <Route path="/todo" element={<Todo />} >           
              <Route path="/todo/:todo_id" element={<TodoItem/>} />
              <Route path="/todo/edit/:user_id" element={<TodoEdit/>} />              
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
