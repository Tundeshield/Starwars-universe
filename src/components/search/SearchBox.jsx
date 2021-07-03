import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBox.css";
import axios from "axios";
import { searchTermResult } from "../../redux/features/search/searchResultSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();

	const searchApi = axios.create({
		baseURL: `https://swapi.dev/api/people/?search=${searchTerm}`,
	});

	const fetchData = async () => {
		try {
			const response = await searchApi.get().then((res) => {
				const data = res.data.results;
				dispatch(searchTermResult(data));
				history.push(`/search/${searchTerm}`);
				setSearchTerm("");
			});
			return response;
		} catch (error) {
			console.error(error);
		}
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
