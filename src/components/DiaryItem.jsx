import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import DiarySidelist from "./DiarySidelist";

export default function DiaryItem() {
  const [data,setData] = useState({});
  const {diary_id} = useParams();  


  useEffect(() => {
    axios.get(`/api/diary/${diary_id}`).then((response)=>{
      setData(response.data)    // 성공
    }).catch((error)=>{
      console.log(error);       // 실패
    });
  },[diary_id]);


	return (
		<> 
      <div className="flex flex-wrap bg-red-100 box-content p-0  w-screen h-screen">
        <div className="w-1/6 ">      
          <DiarySidelist/>
        </div>
        <div className="w-5/6  bg-amber-100 p-6">
        <h1>{data.diary_title}</h1>
        <p>{data.diary_content}</p>
        </div>
      </div>
    

    </>
  )
}