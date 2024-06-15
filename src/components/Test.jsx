import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Test() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('/api/user').then((response)=>{
      setData(response.data)    // 성공
    }).catch((error)=>{
      console.log(error);       // 실패
    })
  },[]);

  return (
    <div>
      <ul>
      {data.map((user)=>(
        <li>
        {user.user_name} - {user.user_id}
        </li>
      ))} 
      </ul>
    </div>
  );
}

