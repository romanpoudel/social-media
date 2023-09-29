import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Messenger from "./pages/messenger/Messenger";

function App() {
	const { user } = useContext(AuthContext);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Navigate to="/register"/>} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/register"
					element={user ? <Navigate to="/" /> : <Register />}
				/>
				<Route
					path="/messenger"
					element={!user ? <Navigate to="/" /> : <Messenger />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
