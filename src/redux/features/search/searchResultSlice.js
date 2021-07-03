import { createSlice } from "@reduxjs/toolkit";

export const searchResultSlice = createSlice({
	name: "search",
	initialState: {
		value: [],
	},
	reducers: {
		searchTermResult: (state, action) => {
			return {
				value: [...action.payload],
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { searchTermResult } = searchResultSlice.actions;
export const useSearchResults = (state) => state.search.value;
export default searchResultSlice.reducer;
