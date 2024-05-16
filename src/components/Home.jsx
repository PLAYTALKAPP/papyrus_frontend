
export default function Home() {
	return (
		<>
		<div className="min-h-screen flex items-center justify-center">

			<div className="max-w-sm rounded overflow-hidden shadow-lg grid place-items-center w-1/4 py-10 bg-indigo-50">
				<div className="px-6 py-4 grid place-items-center" >
					<div className="font-bold text-xl mb-2">Login</div>
					<input type="text" placeholder="ID" className="bg-slate-50"/>
					<input type="password" placeholder="PW" className="bg-slate-50 mt-1"/>
				</div>
				<p><input type="checkbox"/>로그인 유지</p>

				<div className="px-6 pt-4 pb-5">
					<button className="rounded bg-indigo-500 hover:bg-indigo-700 p-1 px-2 text-white">가입</button>
					<button className="rounded bg-indigo-500 hover:bg-indigo-700 p-1 px-2 ml-2  text-white">로그인</button>
				</div>
			</div>

		</div>
    
		</>
	)
}