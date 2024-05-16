import React, { useEffect, useState } from 'react';
// import Instance from '../../axiosConfig';
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
      {data.map((user)=>(user.user_name))} 
    </div>
  );
}

