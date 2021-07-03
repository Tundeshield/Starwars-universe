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

	const searchAPI = axios.create({
		baseURL: `https://swapi.dev/api/people/?search=${searchTerm}`,
	});

	const fetchData = async (e) => {
		e.preventDefault();
		await searchAPI.get().then((response) => {
			const data = response.data.results;
			setSearchResults(data);
			setSearchTerm("");
			history.push(`/search/${searchTerm}`);
		});
		dispatch(searchTermResult(searchResults));
		console.log(searchResults);
	};

	return (
		<div className="header__search" onSubmit={fetchData}>
			<div className="header__searchContainer">
				<input
					type="text"
					placeholder="Search for a character..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<div>
					<SearchIcon onClick={fetchData} />
					<button type="submit" />
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
