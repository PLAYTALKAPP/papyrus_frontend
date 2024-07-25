import { Link } from "react-router-dom";

const Button = ({text, link, onClick})=>{

  if(link){
    return(
      <button className={"rounded bg-indigo-500 hover:bg-indigo-700  p-1 px-2 ml-2  text-white"}  >
        <Link to={link}>{text}</Link>
      </button>
    )
  }
  return(
    <button className={"rounded bg-indigo-500 hover:bg-indigo-700  p-1 px-2 ml-2  text-white"} onClick={onClick} >
      {text}
    </button>
  )
 };



 export default Button;

