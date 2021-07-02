import React from "react";
import "./SearchResult.css"
import {Link} from "react-router-dom"

const SearchResult = () => {
	return (
		<Link to="/" className="search__result">
			<h2 className="search__header">Obi wan kenobi</h2>
			<p className="search__details">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
				repudiandae voluptates beatae fugit expedita hic fugiat, eaque quisquam
				perferendis iusto.
			</p>
		</Link>
	);
};

// `/actor/${character.height}`

export default SearchResult;
