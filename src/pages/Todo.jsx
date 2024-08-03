import React, { useEffect, useState } from 'react';
import TodoSideBar from './TodoSideBar';

import { TodoProvider } from '../contexts/TodoContext';
import TodoPage from './TodoPage';
// const cookies = new Cookies();
/**
 * @ TODO LayOutPage
 * @ TODO -- TODOSIDEBAR -- EDIT버튼
 *                       -- TODOLIST
 *        -- TODOPAGE -- TODOITEM
 *                    -- TODOEDIT
 *                    -- TODOBOARD(가정)
 */
export default function Todo() {

	return (		
  <>   
    <TodoProvider>
     <div className="flex flex-wrap bg-red-100 box-content p-0  w-screen h-screen">
      <div className="w-1/6 ">      
        <TodoSideBar/>
      </div>
      <div className="w-5/6  bg-amber-100 p-6">      
        <TodoPage/>
      </div>
     </div>
    </TodoProvider> 
 
    </>
  )
}