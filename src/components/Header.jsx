import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Header ()  {
  const navigator = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['user_info']);
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    user_id: '',
    user_name: '',
    user_pw: '',
  });

  useEffect(() => {
    const userIdFromCookie = cookies.user_info;
    if (userIdFromCookie) {
          setIsLogin(true);
          setUserInfo(userIdFromCookie);
      }
  }, [cookies]);

  const removeUserInfoFromCookie = () => {
    removeCookie('user_info');
  };


  const handleLogout = () => {
    axios.post('/api/logout')
      .then(response => {
        setIsLogin(false);
        setUserInfo({});
        removeUserInfoFromCookie();
        navigator('/');
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-amber-500 p-6">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              {isLogin ? <Link to="/diary" className="mr-4">홈</Link> :
                <Link to="/" className="mr-4">홈</Link>
              }
              <Link to="/diary" className="mr-4">다이어리</Link>
              <Link to="/test" className="mr-4">테스트</Link>
            </div>
            <div>
              {isLogin && `${userInfo.user_name}님 `}
              {isLogin && <button onClick={handleLogout}>로그아웃</button>}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};


