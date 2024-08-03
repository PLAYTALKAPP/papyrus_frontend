import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//StrictMode 해제하면 콘솔 두번뜨는거 방지됨.
// 몇몇 함수들을 의도적으로 이중 호출 하여서 발견할 수 있게 한다.
// - 클래스 컴포넌트의 constructor, render 그리고 shouldComponentUpdate 메서드
// - 클래스 컴포넌트의 getDerivedStateFromProps static 메서드
// - 함수 컴포넌트 바디
// - State updater 함수 (setState의 첫 번째 인자)
// - useState, useMemo 그리고 useReducer에 전달되는 함수

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
