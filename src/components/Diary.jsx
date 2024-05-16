import DiarySidelist from "./DiarySidelist";


export default function Diary() {
	return (
		<> 
    
    <div className="flex flex-wrap bg-red-100 box-content p-0  w-screen h-screen">
      <div className="w-1/6 ">      
        <DiarySidelist/>
      </div>
      <div className="w-5/6  bg-amber-100 p-6">
          컨텐츠내용
      </div>
    </div>


    </>
  )
}
