import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import charactersSlice from "../redux/features/character/charactersSlice";
import thunk from "redux-thunk";

export const store = configureStore({
	reducer: {
		characters: charactersSlice,
		applyMiddleware: [thunk],
	},
});
