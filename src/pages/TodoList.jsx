import React, { useEffect, useState , useContext} from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { ToDoContext } from '../contexts/TodoContext';

export default function TodoList() {
  const {userId,setUserId} = useContext(ToDoContext);
  const {isEdit,setIsEdit} = useContext(ToDoContext);
  const navigate = useNavigate();

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

  const listToItem = (todoId) => {
    navigate(`/todo/${todoId}`);
    setIsEdit(false);
  };
  return (   
      <div> 
        <ul>
        {data.map((todo)=>(          
          <li key = {todo.todo_id} >            
          <button
              onClick={() => listToItem(todo.todo_id)}
              style={{ border: 'none', background: 'none', cursor: 'pointer' }} >
              {todo.todo_cate}
            </button>      
          </li>
        ))} 
        </ul>
      </div>

  );
}

