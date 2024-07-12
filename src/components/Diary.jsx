import DiaryItem from "./DiaryItem";
import DiarySideBar from "./DiarySideBar";
import {Cookies} from 'react-cookie';
import React, { useEffect, useState } from 'react';
const cookies = new Cookies();

export default function Diary() {
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
        <DiarySideBar userId = {userId}/>
      </div>
      <div className="w-5/6  bg-amber-100 p-6">      
        <DiaryItem />
      </div>
    </div>


    </>
  )
 
}
