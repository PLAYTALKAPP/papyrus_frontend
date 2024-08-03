import React, { useContext,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToDoContext } from '../contexts/TodoContext';

export default  function TodoEdit() {
  const { user_id } = useParams();
  const {isEdit, setIsEdit} = useContext(ToDoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 구현
  };
  return (
    <div>
     <h1>Edit화면</h1>
    </div>
  );
}

