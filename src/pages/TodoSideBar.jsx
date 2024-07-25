import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoList from './TodoList';


export default function TodoSideBar({ userId }) {
  return (
    <div>
      <div className='h-screen'>
        <div className='box-border h-1/6 bg-orange-500 p-6'>
           <Link to ={`/todo/edit/${userId}`}>
            <p>등록</p>      
          </Link> 
        </div>
        <div className='box-border h-1/3 bg-red-200100'>
          TODO LIST
          <TodoList cookieUserId={userId} />
        </div>
      </div>
    </div>
  );
}
