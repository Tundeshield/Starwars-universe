import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
	name: "characters",
	initialState: {
		value: [],
	},
	reducers: {
		addCharacterList: (state, action) => {
			return {
				value: [...action.payload],
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { addCharacterList } = charactersSlice.actions;
export const selectCharacters = (state) => state.characters.value;
export default charactersSlice.reducer;
