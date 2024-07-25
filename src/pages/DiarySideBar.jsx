import React, { useEffect, useState } from 'react';
import DiaryList from './DiaryList';

export default function DiarySideBar({ userId }) {
  return (
    <div>
      <div className='h-screen'>
        <div className='box-border h-1/6 bg-orange-500'>
          카테고리컴포넌트
        </div>
        <div className='box-border h-1/3 bg-blue-500'>
          다이어리리스트
          <DiaryList cookieUserId={userId}  />
        </div>
      </div>
    </div>
  );
}
