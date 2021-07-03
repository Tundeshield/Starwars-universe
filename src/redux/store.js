import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../redux/features/character/charactersSlice";
import favoritesSlice from "../redux/features/favorites/favorites";
import searchResultSlice from "../redux/features/search/searchResultSlice";

export const store = configureStore({
	reducer: {
		characters: charactersSlice,
		favorites: favoritesSlice,
		search: searchResultSlice,
	},
});
