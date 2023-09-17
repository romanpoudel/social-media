const Register = () => {
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
					<div className="loginBox h-[400px] bg-white p-5 rounded-lg flex flex-col justify-between">
						<input
							placeholder="Username"
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<input
							placeholder="Email"
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<input
							placeholder="Password"
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<input
							placeholder="Confirm Password"
							className="loginInput h-12 rounded-lg border-2 border-gray-500 focus:outline-none text-lg pl-5"
						/>
						<button className="loginButton h-12 rounded-lg border-none bg-blue-600 text-white text-xl font-medium cursor-pointer">
							Sign Up
						</button>
						<button className="loginRegisterButton h-12 rounded-lg border-none bg-green-600 text-white text-xl font-medium cursor-pointer">
							Log into Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
