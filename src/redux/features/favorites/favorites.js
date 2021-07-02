import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: {
		value: localStorage.getItem("favorites")
			? JSON.parse(localStorage.getItem("favorites"))
			: [],
	},
	reducers: {
		addToFavorites: (state, action) => {
			return {
				value: [...state.value, action.payload],
			};
		},
		removeFromFavorites: (state, action) => {
			return {
				value: [...action.payload],
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const selectFavoriteList = (state) => state.favorites.value;
export default favoritesSlice.reducer;
