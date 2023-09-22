import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: {
		_id:"650419f271be9a6a9effd761",
		username: "john lenon",
		email: "janelenon@gmail.com",
		profilePicture: "",
		coverPicture: "",
		followers: [],
		followings: [],
		isAdmin: false,
		desc: "I am roman trying to update data",
        relationship: 1,
	},
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.node,
};
