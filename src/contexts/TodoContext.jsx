import React, { createContext, useEffect, useState } from 'react';
import {Cookies} from 'react-cookie';
import axios from 'axios';
export const ToDoContext = createContext();

const cookies = new Cookies();

export function TodoProvider({ children }) {
  const userInfo = cookies.get('user_info'); 
  const cookieUserId = userInfo.user_id;
  const [userId,setUserId] = useState("");

  const [isEdit,setIsEdit] = useState(false);
  const [isTodo,setIsTodo] = useState(false);
  
  useEffect(() => {
    setUserId(cookieUserId);
   },[userId]);

  useEffect(()=>{
    if (userId) {
        axios.get(`/api/todo/user/${userId}`)
          .then((response) => {
            setIsTodo(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },[userId]);

  return (
    <ToDoContext.Provider value={{ isEdit, setIsEdit , isTodo, setIsTodo ,userId,setUserId}}>
      {children}
    </ToDoContext.Provider>
  );
}