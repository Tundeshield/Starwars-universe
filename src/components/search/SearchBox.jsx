import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBox.css";

const SearchBox = () => {
	return (
		<>
			<div className="header__search">
				<div className="header__searchContainer">
					<input type="text" placeholder="Search for a character..." />
				</div>
				<div className="header__searchContainerRight">
					<SearchIcon className="icon" />
				</div>
			</div>
		</>
	);
};

export default SearchBox;
