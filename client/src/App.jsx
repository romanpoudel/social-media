import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Register />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route
					path="/login"
					element={user ? <Home /> : <Login />}
				/>
				<Route
					path="/register"
					element={user ? <Home /> : <Register />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
