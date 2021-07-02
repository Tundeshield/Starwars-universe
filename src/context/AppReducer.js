export default (state, action) => {
	switch (action.type) {
		case "ADD_TO_FAVORITES":
			return {
				...state,
				favorites: [action.payload, ...state.favorites],
			};
		case "FETCH_CHARACTERS":
			return {
				...state,
				characters: [action.payload, ...state.characters],
			};
		default:
			return state;
	}
};
