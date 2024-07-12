import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';


export default function Home() {
	
	return (
		<>
		<div className="min-h-screen flex items-center justify-center">
      <h1>홈화면</h1>
			
		</div>
		</>
	)
}