import axios from "axios";
import { useRef } from "react";
import { Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"

const Register = () => {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef();
	const navigate = useNavigate();

	const handleClick =async (e) => {
		e.preventDefault()
		if(passwordAgain.current.value !== password.current.value){
			passwordAgain.current.setCustomValidity("Passwords don't match!")
			console.log(passwordAgain.current.value)
		}else
		{
			
			passwordAgain.current.setCustomValidity("")
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value,
			};
			try{
				await axios.post("/api/auth/register",user)
				navigate("/login")
			}
			catch(err){
				console.log(err)
			}
		}
	};
	return (
		<div className="login w-[100vw] h-[100vh] bg-gray-100 flex items-center justify-center">
			<div className="loginWrapper w-3/4 h-3/4 flex">
				<div className="loginLeft flex-1 flex flex-col justify-center">
					<h3 className="loginLogo text-5xl font-extrabold text-blue-600 mb-2.5">
						Social
					</h3>
					<span className="loginDesc text-2xl">
						Connect with friends and the world around you on social.
					</span>
				</div>
				<div className="loginRight flex-1 flex flex-col justify-center">
					<form onSubmit={handleClick} className="loginBox h-[400px] bg-white p-5 rounded-lg flex flex-col justify-between">
						<input
							placeholder="Username"
							ref={username}
							type="text"
							required
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<input
							placeholder="Email"
							ref={email}
							type="email"
							required
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<input
							placeholder="Password"
							ref={password}
							type="password"
							required
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<input
							placeholder="Confirm Password"
							ref={passwordAgain}
							type="password"
							required
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<button type="submit" className="loginButton h-12 rounded-lg border-none bg-blue-600 text-white text-xl font-medium cursor-pointer">
							Sign Up
						</button>
						<Link to="/login" className="w-full">
							<button className="loginRegisterButton w-full h-12 rounded-lg border-none bg-green-600 text-white text-xl font-medium cursor-pointer">
								Log into Account
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
