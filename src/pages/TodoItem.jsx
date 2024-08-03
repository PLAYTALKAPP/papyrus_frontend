import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';
import ICONButton from '../components/ICONButton';

export default function TodoItem() {
  const [todo, setTodo] = useState([]);
  const { todo_id } = useParams();
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    if (todo_id) { 
      axios.get(`/api/todo/${todo_id}`)
        .then((response) => {
          setTodo(response.data);
          setTodoTitle(response.data[0].todo_cate);//XXX. 타이틀만 존재할때 타이틀만 뜨지않는현상있음 고쳐야됨.
        })
        .catch((error) => {
          console.log(error);
        });  
        // console.log(todo);
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
  
  const addList = () =>{};

  return (
    <div>
      <h1>{todoTitle}</h1>
      
      <div className='p-5'>
         <ul>          
        {todo.map((item)=>(
          <li 
            key = {item.todolist_id} 
            className="flex items-center mb-2 space-x-2" 
          >
            <input
                type="checkbox"
                name="todo_checking"
                checked={item.todo_checking}
                onChange={() => handleCheckboxChange(item.todolist_id)} // 체크박스 변경 시 처리할 함수 호출
                className='ml-1'
              />          
            <p>{item.description} </p> 
            <ICONButton
               type={'CANCLE'}
             />
          </li>
        ))} 
        </ul>
      </div>
      
      <div className='flex flex-row'>
        <input type = 'text'/> 
        <Button
          text = {'+'}
          link = {addList}
        />
      </div>

    </div>
  );
}
