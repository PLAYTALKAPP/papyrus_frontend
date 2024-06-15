import React, { useState } from 'react';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';

export default function UserJoin() {
  const navigator = useNavigate();
  const [inputUser, setInputUser] = useState({
    user_id: "",
    user_name: "",
    user_pw: "",
    phone: "",
    email: "",
  });
  const [profileImg,setProfileImg] = useState("");

  const [isUserIdAvailable, setIsUserIdAvailable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputUser({
      ...inputUser,
      [name]: value,  
    });
     // 아이디가 변경되면 다시 중복 체크를 하도록 설정
     if (name === 'user_id') {
      setIsUserIdAvailable(false);
    }
  };

  //파일전용 전송핸들러
  const handleFileChange = (e) => {
    setProfileImg(e.target.files[0]);
};
  


  const idCheck = async () => {
    try {
      const response = await axios.post('/api/checkUser', { user_id: inputUser.user_id });
      if (response.status === 200) {
        setIsUserIdAvailable(true);
        alert('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      setIsUserIdAvailable(false);
      alert('사용 불가능한 아이디입니다. 다른 아이디를 입력해주세요.');
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (!isUserIdAvailable) {
    //   alert('아이디 중복을 확인해주세요.');
    //   return;
    // }

    try {
      const formData = new FormData();
      formData.append('user_id', inputUser.user_id);
      formData.append('user_name', inputUser.user_name);
      formData.append('user_pw', inputUser.user_pw);
      formData.append('phone', inputUser.phone);
      formData.append('email', inputUser.email);
      formData.append('profile_img',profileImg);
      await axios.post('/api/addUser', formData, {headers:{'Content-Type':'multipart/form-data'}});
      alert('회원 등록에 성공하였습니다. 로그인해주세요.');
      navigator("/");
    } catch (error) {
      console.error('Error adding user:', error);
      alert('회원 등록 중 오류가 발생하였습니다.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md rounded overflow-hidden shadow-lg grid place-items-center w-3/4 py-10 bg-indigo-50">
        <div className="font-bold text-xl py-3">SignUp</div>
        <form onSubmit={onSubmit} encType='multipart/form-data' method='post' >
          <table>
            <tbody>
              <tr>
                <td className='py-3'>ID</td>
                <td>
                  <input
                    type='text'
                    name='user_id'
                    value={inputUser.user_id}
                    onChange={handleChange}
                    className='border rounded-md'
                  />
                  <button
                    type='button'
                    className='bg-rose-600 hover:bg-rose-900 rounded-md text-white text-sm p-1 ml-2'
                    onClick={idCheck}
                  >
                    중복체크
                  </button>
                 
                </td>
              </tr>
              <tr>
                <td className='py-3'>PW</td>
                <td>
                  <input
                    type='password'
                    name='user_pw'
                    value={inputUser.user_pw}
                    onChange={handleChange}
                    className='border rounded-md'
                  />
                </td>
              </tr>
              <tr>
                <td className='py-3'>이름</td>
                <td>
                  <input
                    type='text'
                    name='user_name'
                    value={inputUser.user_name}
                    onChange={handleChange}
                    className='border rounded-md'
                  />
                </td>
              </tr>
              <tr>
                <td className='py-3'>번호</td>
                <td>
                  <input
                    type='text'
                    name='phone'
                    value={inputUser.phone}
                    onChange={handleChange}
                    className='border rounded-md'
                  />
                </td>
              </tr>
              <tr>
                <td className='py-3'>이메일</td>
                <td>
                  <input
                    type='text'
                    name='email'
                    value={inputUser.email}
                    onChange={handleChange}
                    className='border rounded-md'
                  />
                </td>
              </tr>
              <tr>
                <td colSpan='2' className='py-3'>프로필</td>
              </tr>
              <tr>
                <td colSpan='2'>
                <input
                    className="relative m-0 block w-10/12 min-w-0 flex-auto cursor-pointer rounded-md border border-secondary-500 bg-transparent bg-clip-padding 
                    px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out 
                    file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden 
                    file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-blue-600 file:text-slate-50 file:px-3  
                    file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                    type="file"
                    name={profileImg}
                    onChange={handleFileChange}
                  />
               
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type='submit'
            className="my-3 bg-blue-600 hover:bg-rose-600 text-white py-2 px-4 rounded w-full"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
