import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DiaryItem() {
  const [diary, setDiary] = useState(null);
  const { diary_id } = useParams();

  useEffect(() => {
    if (diary_id) { 
      axios.get(`/api/diary/${diary_id}`)
        .then((response) => {
          setDiary(response.data);
        })
        .catch((error) => {
          console.log(error);
        });  
      }  
  }, [diary_id]);

  if (!diary) {
    return (
      <>
      <div className="flex justify-center   h-screen">
        <div className="text-center pt-20">
          <p>아직 다이어리가 없네요?</p>
          <p className="pb-3"> 다이어리를 써볼까요?</p>
          <button className="rounded bg-indigo-500 hover:bg-indigo-700 p-1 px-2 ml-2  text-white">
                다이어리쓰기
          </button>
          <img className="box-content h-80 w-80 pt-4" src="/emptyImg.png" alt="Empty Diary Image"/>
        </div>
      </div>
      </>
    );
  }

  return (
    <div>
      <h1>{diary.diary_title}</h1>
      <p>{diary.diary_content}</p>
    </div>
  );
}
