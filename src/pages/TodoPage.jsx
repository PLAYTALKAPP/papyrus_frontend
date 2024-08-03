import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import TodoItem from './TodoItem';
import {ToDoContext} from '../contexts/TodoContext'
import TodoEdit from './TodoEdit';
import TodoEmpty from './TodoEmpty';
import TodoBoard from './TodoBoard';


export default function TodoPage(props) {
  const {isTodo, setIsTodo} = useContext(ToDoContext); //TODO가 없을때 TODOEMPTY출력
  const {isEdit, setIsEdit} = useContext(ToDoContext); //EDIT 버튼 체크
  const {isItem, setIsItem} = useState(false);//ITEM 유무
  const { todo_id } = useParams();
  

  const renderComponent = () =>{
    if(isEdit) {
      //Edit출력
      return <TodoEdit/>
    }else if(isTodo && !(todo_id)){
      //보드 출력
      return <TodoBoard/>;
    }else if(todo_id){
      //아이템값출력
      return <TodoItem/>
    }else if(!isTodo){
      //빈 투두값출력 (아무것도 없을때 나는것이기 때문에 if문 순서변경 X)
      return <TodoEmpty/>;
    }else{
      console.log(isEdit,isTodo,isEdit,todo_id);
      return null;
    }
  }
  return (
    <div>
      {renderComponent()}
    </div>
  );
}
;