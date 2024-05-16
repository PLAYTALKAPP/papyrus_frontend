import React from 'react';
import { Link } from "react-router-dom";

export default function DiarySidelist() {
  return (
    <div>
      <div className='h-screen'>     
        <div className='box-border h-1/6  bg-orange-500'>카테고리컴포넌트</div>
        <div className='box-border h-1/3 bg-blue-500' >다이어리리스트</div>
      </div>
    </div>
  );
}
