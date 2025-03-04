import React from "react";

const Login = ({ onLoginSuccess }) => {
	const handleLogin = () => {
		// Mock login process
		onLoginSuccess();
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-offwhite">
			<div className="p-8 bg-gray-800 rounded shadow-lg">
				<h2 className="text-2xl mb-4 text-white">Login</h2>
				<button
					onClick={handleLogin}
					className="w-full py-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-300 text-white shadow-lg hover:shadow-xl">
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
