import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	characters: [],
};

export const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		addCharacterList: (state, action) => {
			state.characters.push(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addCharacterList } = charactersSlice.actions;

export default charactersSlice.reducer;
// {
//   ...state,
//   photo: [...state.photo, action.photo]
// }
