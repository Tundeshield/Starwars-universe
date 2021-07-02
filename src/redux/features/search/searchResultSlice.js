import { createSlice } from "@reduxjs/toolkit";

export const searchResultSlice = createSlice({
	name: "searchresults",
	initialState: {
		value: [],
	},
	reducers: {
		addSearchResult: (state, action) => {
			return {
				value: [...action.payload],
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { addSearchResult } = searchResultSlice.actions;
export const searchResults = (state) => state.searchresults.value;
export default searchResultSlice.reducer;
