import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Cookies} from 'react-cookie';
import TodoSideBar from './TodoSideBar';
import TodoItem from './TodoItem';
const cookies = new Cookies();

export default function Todo() {
  const userInfo = cookies.get('user_info'); 
  const cookieUserId = userInfo.user_id;
  const [userId,setUserId] = useState("");
 
  useEffect(() => {
   setUserId(cookieUserId);
  },[userId]);

	return (		
  <>     
    <div className="flex flex-wrap bg-red-100 box-content p-0  w-screen h-screen">
      <div className="w-1/6 ">      
        <TodoSideBar userId = {userId}/>
      </div>
      <div className="w-5/6  bg-amber-100 p-6">      
        <TodoItem/>
      </div>
    </div>
    </>
  )
}