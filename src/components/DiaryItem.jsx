import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DiaryItem() {
  const [diary, setDiary] = useState(null);
  const { diary_id } = useParams();

  useEffect(() => {
    if (diary_id && !diary) { 
      axios.get(`/api/diary/${diary_id}`)
        .then((response) => {
          setDiary(response.data);
        })
        .catch((error) => {
          console.log(error);
        });  
      }  
  }, [diary_id,diary]);

  if (!diary) {
    return <div>Select a diary to view details</div>;
  }

  return (
    <div>
      <h1>{diary.diary_title}</h1>
      <p>{diary.diary_content}</p>
    </div>
  );
}
