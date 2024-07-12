import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DiaryList({cookieUserId}) {
  const [userId,setUserId] = useState("");

  useEffect(()=>{
    setUserId(cookieUserId) ;   
  },[cookieUserId]);

  const [data,setData] = useState([]);  
  useEffect(()=>{
  if (userId) {
      axios.get(`/api/diary/user/${userId}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },[userId]);//[]안의 조건이 변경될때 실행되도록 설정.

  return (
   
      <div>       
        <ul>
        {data.map((diary)=>(
          <li key = {diary.diary_id} >            
            <Link                
              to = {`/diary/${diary.diary_id}`}
              >
            {diary.diary_title} 
            </Link>          
          </li>
        ))} 
        </ul>
      </div>

  );
}

