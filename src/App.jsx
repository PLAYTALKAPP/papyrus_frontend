import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Diary from "./components/Diary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderRef from "./components/HeaderRef";

function App() {
  return (
    <>
      <Router>
        <HeaderRef />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </Router>
    </>
  );
}

// BrowserRouter : Routes 의 부모컴포넌트. 라우터의 컨텍스트(라우팅 기능)을 제공
// Routes : Route 를 묶는 부모컴포넌트
// Route : 개별 컴포넌트의 path 지정가능

export default App;
