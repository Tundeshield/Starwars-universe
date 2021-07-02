import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBox.css";
import axios from "axios";

const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const history = useHistory();

	const searchAPI = axios.create({
		baseURL: `https://swapi.dev/api/people/?search=${searchTerm}`,
	});

	const fetchData = async () => {
		await searchAPI.get().then((response) => {
			const data = response.data.results;
			setSearchResults(data);
			console.log(data);
			setSearchTerm("");
			history.push(`/search/${searchTerm}`);
		});
	};

	return (
		<>
			<div className="header__search">
				<div className="header__searchContainer">
					<input
						type="text"
						placeholder="Search for a character..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className="header__searchContainerRight">
					<SearchIcon className="icon" onClick={fetchData} />
				</div>
			</div>
		</>
	);
};

export default SearchBox;
