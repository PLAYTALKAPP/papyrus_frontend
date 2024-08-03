import React, { useContext,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TodoList from './TodoList';
import Button from '../components/Button';
import { ToDoContext } from '../contexts/TodoContext';


export default function TodoSideBar() {
  const navigate = useNavigate();
  const {userId,setUserId} = useContext(ToDoContext);
  const {isEdit, setIsEdit} = useContext(ToDoContext);
  const goToEdit = () =>{
    setIsEdit(true);
    navigate(`/todo/edit/${userId}`)
  }
 
  return (
    <div>
      <div className='h-screen'>
        <div className='box-border h-1/6 bg-orange-500 p-6'>
          <Button
            onClick={goToEdit}
            text={'TODO등록'}
          />
        </div>
        <div className='box-border h-1/3 bg-red-200100'>
          TODO LIST
          <TodoList cookieUserId={userId} />
        </div>
      </div>
    </div>
  );
}
