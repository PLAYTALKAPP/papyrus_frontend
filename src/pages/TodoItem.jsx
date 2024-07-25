import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function TodoItem() {
  const [todo, setTodo] = useState([]);
  const { todo_id } = useParams();


  useEffect(() => {
    if (todo_id) { 
      axios.get(`/api/todo/${todo_id}`)
        .then((response) => {
          setTodo(response.data);
         
        })
        .catch((error) => {
          console.log(error);
        });  
      }  
  }, [todo_id]);

  const handleCheckboxChange = (todolistId) => {
    setTodo(prevTodo =>
      prevTodo.map(todoItem =>
        todoItem.todolist_id === todolistId
          ? { ...todoItem, todo_checking: !todoItem.todo_checking }
          : todoItem
      )
    );
  };

  if (!todo || todo.length=== 0) {
    return (
      <>
      <div className="flex justify-center   h-screen">
        <div className="text-center pt-20">
          <p>아직 리스트가 없네요.리스트를 써주세요.</p>
         </div>
      </div>
      </>
    );
  }

  const category = todo[0].todo_cate;
  return (
    <div>
      <h1>카테고리 : {category}</h1>
         <ul>          
        {todo.map((item)=>(
          <li key = {item.todolist_id} >
                 <input
                  type="checkbox"
                  name="todo_checking"
                  checked={item.todo_checking} // todo_checking 값이 true면 체크된 상태, false면 체크 해제 상태
                  onChange={() => handleCheckboxChange(item.todolist_id)} // 체크박스 변경 시 처리할 함수 호출
                />          
               {item.description} 
               
          </li>
        ))} 
        </ul>
    </div>
  );
}
