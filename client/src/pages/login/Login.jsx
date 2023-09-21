import { useContext, useRef } from "react";
import { loginCall } from "../../loginApiCall";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
	const { user, isFetching, dispatch } = useContext(AuthContext);
	const email = useRef();
	const password = useRef();
	const handleClick = (e) => {
		e.preventDefault();
		loginCall(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
		console.log(user);
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
					<form
						onSubmit={handleClick}
						className="loginBox h-[400px] bg-white p-5 rounded-lg flex flex-col justify-between"
					>
						<input
							placeholder="Email"
							required
							type="email"
							ref={email}
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<input
							placeholder="Password"
							required
							type="password"
							minLength={6}
							ref={password}
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<button
							className="loginButton h-12 rounded-lg border-none bg-blue-600 text-white text-xl font-medium cursor-pointer"
							disabled={isFetching}
						>
							{isFetching ? (
								<CircularProgress size="28px" color="inherit" />
							) : (
								"Log In"
							)}
						</button>
						<span className="text-center text-blue-600">
							Forgot Password?
						</span>
						<Link
							to="/register"
							className="loginRegisterButton w-full "
						>
							<button className="loginRegisterButton w-full h-12 rounded-lg border-none bg-green-600 text-white text-xl font-medium cursor-pointer">
								{isFetching ? (
									<CircularProgress
										size="28px"
										color="inherit"
									/>
								) : (
									"Create a New Account"
								)}
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
