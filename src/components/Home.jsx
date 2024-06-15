import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';


export default function Home() {
	const navigator = useNavigate();
	const [loginInfo, setLoginInfo] = useState({
		user_id: "",
    user_pw: "" ,
		user_name:""  
  });
	const [cookies, setCookie, removeCookie] = useCookies(['user_info']);
  const saveUserInfoToCookie = (userData) => {
    setCookie('user_info', userData, { path: '/', maxAge: 3600 });
  };

	const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  };
  
	const onLogin= async (e)=>{
		e.preventDefault();
		if(loginInfo.user_id ===""){
			alert(`아이디를 입력해주세요.`);
			return;
		}
		if(loginInfo.user_pw===""){
			alert(`비밀번호를 입력해주세요.`);
			return;
		}
    try {
      const response = await axios.post('/api/login',  { user_id: loginInfo.user_id, user_pw:loginInfo.user_pw });
			const userInfo = response.data
			// 로그인 성공 시 쿠키에 세션 정보 저장(Back에서 해당 정보 암호화 해서 변형해야함)
			// document.cookie = `userId=${userInfo.user_id}; path=/;`;
			// document.cookie = `userPw=${userInfo.user_pw}; path=/;`;
			// document.cookie = `userName=${userInfo.user_name}; path=/;`;
			loadLoginUserInfo();

      alert(`로그인에 성공하였습니다. ${userInfo.user_name}님 반갑습니다.`);
      navigator("/diary");
    } catch (error) {    
      alert(`로그인에 실패하였습니다. 다시 로그인해주세요.`);
    }
	};
    const loadLoginUserInfo = async () => {
      try {
        const response = await axios.get('/api/userInfo');
        const userData = response.data;
        setLoginInfo(userData);
        // setIsLogin(true);
        saveUserInfoToCookie(userData);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };


	return (
		<>
		<div className="min-h-screen flex items-center justify-center">
			<form 
					className="max-w-sm rounded overflow-hidden shadow-lg grid place-items-center w-1/4 py-10 bg-indigo-50"
					onSubmit={onLogin}
					>
				<div className="px-6 py-4 grid place-items-center" >
				
					<div className="font-bold text-xl mb-2">Login</div>
					<input type="text" 
						placeholder="ID" 
						className="bg-slate-50" 
						name='user_id' 
						value={loginInfo.user_id}
						onChange={handleChange}/>

					<input type="password" 
						placeholder="PW" 
						className="bg-slate-50 mt-1"
						name='user_pw'
						value={loginInfo.user_pw} 
						onChange={handleChange}/>
					</div>	
				<p><input type="checkbox"/>로그인 유지</p>

				<div className="px-6 pt-4 pb-5">
					<button className="rounded bg-indigo-500 hover:bg-indigo-700 p-1 px-2 text-white" >
							<Link to = '/join'>가입</Link>
							</button>
					<button 
						className="rounded bg-indigo-500 hover:bg-indigo-700 p-1 px-2 ml-2  text-white" 
						type ="submit"
						>로그인</button>
				</div>		
			</form>	
		</div>
		</>
	)
}