import React from 'react';
/**
 * @description  npm install @heroicons/react 설치하여 사용 (https://heroicons.dev/?strictJsx=true)
 * @param "type: CANCLE(X) PLUS(+) 표시"
 * @function onClick : 클릭시 이벤트 제어
 */
const ICONButton = ({ type, onClick }) => {

  const renderIcon = () => {
    if (type === "CANCLE")
      return (
        <svg
          data-slot="icon" // 변경된 부분
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          />
        </svg>
      );
    else if (type === "PLUS")
      return (
        <svg
          data-slot="icon" // 변경된 부분
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      );
    else return null;
  };
  
  return (
    <button
      className="flex items-center justify-center w-5 h-5 rounded-full bg-transparent hover:bg-slate-200  transition-colors duration-300"
      onClick={onClick}
    > 
      {renderIcon()}
    </button>
  );
};

export default ICONButton;
