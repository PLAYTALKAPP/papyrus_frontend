import { Link } from "react-router-dom";
export default function HeaderRef() {
  return (
    <div>
      <header>
      <nav className="flex items-center justify-between flex-wrap bg-amber-500 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="mr-4">홈</Link>
            <Link to="/diary" className="mr-4">다이어리</Link>
            <Link to="/test" className="mr-4">테스트</Link>
          </div>
        </div>
      </nav>
      </header>  
    </div>
  );
}


