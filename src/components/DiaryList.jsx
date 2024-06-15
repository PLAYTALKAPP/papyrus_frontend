import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DiaryList() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('/api/diary').then((response)=>{
      setData(response.data)    // 성공
    }).catch((error)=>{
      console.log(error);       // 실패
    })
  },[]);
  // const urlParameters = useParams();
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

