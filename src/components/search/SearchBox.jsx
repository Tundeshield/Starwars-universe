import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBox.css";
import axios from "axios";
import { searchTermResult } from "../../redux/features/search/searchResultSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const history = useHistory();
	const dispatch = useDispatch();

	const api = axios.create({
		baseURL: `https://swapi.dev/api/people/?search=${searchTerm}`,
	});

	const fetchData = async () => {
		try {
			const response = await api.get("/").then((res) => {
				const data = res.data.results;
				setSearchResults(data);

				history.push(`/search/${searchTerm}`);
				console.log(searchResults);
				dispatch(searchTermResult(searchResults));
			});
			return response;
		} catch (error) {
			console.error(error);
		}
		console.log(searchResults);
		dispatch(searchTermResult(searchResults));
	};

	return (
		<div className="header__search">
			<div className="header__searchContainer">
				<input
					type="text"
					placeholder="Search for a character..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<SearchIcon onClick={fetchData} className="icon" />
			</div>
		</div>
	);
};

export default SearchBox;
