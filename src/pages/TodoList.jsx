import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TodoList({cookieUserId}) {
  const [userId,setUserId] = useState("");

  useEffect(()=>{
    setUserId(cookieUserId) ;   
  },[cookieUserId]);

  const [data,setData] = useState([]);  

  useEffect(()=>{
  if (userId) {
      axios.get(`/api/todo/user/${userId}`)
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
        {data.map((todo)=>(
          
          <li key = {todo.todo_id} >            
            <Link    
              to = {`/todo/${todo.todo_id}`}            
              >
            {todo.todo_cate} 
            </Link>          
          </li>
        ))} 
        </ul>
      </div>

  );
}

