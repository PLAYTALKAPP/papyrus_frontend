import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HeaderRef() {
  const navigator = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userIdFromCookie = getUserIdFromCookie();
    if (userIdFromCookie) {
      setIsLogin(true);
      setUserId(userIdFromCookie);
    }
  }, []); 

  const getUserIdFromCookie = () => {
    const cookies = document.cookie.split('; ');
    const userIdCookie = cookies.find(cookie => cookie.startsWith('userId='));
    if (userIdCookie) {
      return userIdCookie.split('=')[1];
    }
    return null;
  };

  const onLogout = () => {
    document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'userPw=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLogin(false);
    setUserId(null);
    // 로그아웃 후
    navigator('/');
  };
  //로그인 하면 홈클릭시 보이는 화면 설정해야함.
  return (
    <div>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-amber-500 p-6">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              { isLogin ? <Link to="/diary" className="mr-4">홈</Link> :
                <Link to="/" className="mr-4">홈</Link>
              }
              <Link to="/diary" className="mr-4">다이어리</Link>
              <Link to="/test" className="mr-4">테스트</Link>
            </div>
            <div>
              {isLogin && `${userId}님 `}
              {isLogin && <button onClick={onLogout}>로그아웃</button>}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
