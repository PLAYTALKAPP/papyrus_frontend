import React from 'react';
import { useParams } from 'react-router-dom';

export default  function TodoEdit() {
  const { user_id } = useParams();
  const onSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 구현
  };
  return (
    <div>
    <h1>화면떠라</h1>
    <p>{user_id}</p>
    </div>
  );
}

