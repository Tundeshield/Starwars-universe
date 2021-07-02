import React, { createContext, useReducer, uSEffect } from "react";
import AppReducer from "./AppReducer";

//initial State
const initialState = {
	favorites: [],
	searchResults: [],
	characters: [],
};

//Create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	//actions
	const addToFavorites = (favorite) => {
		dispatch({ type: "ADD_TO_FAVORITES", payload: favorite });
	};
	const getCharacters = (characters) => {
		dispatch({ type: "FETCH_CHARACTERS", payload: characters });
	};

	return (
		<GlobalContext.Provider
			value={{
				favorites: state.favorites,
				searchResults: state.searchResults,
				characters: state.characters,
				addToFavorites, getCharacters,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
