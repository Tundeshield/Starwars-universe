import React from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
	return (
		<Link to={`/character/${result.height}`} className="search__result">
			<h2 className="search__header">{result.name}</h2>
			<p className="search__details">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
				repudiandae voluptates beatae fugit expedita hic fugiat, eaque quisquam
				perferendis iusto.
			</p>
			<h4>Read more about...</h4>
		</Link>
	);
};

// `/actor/${character.height}`

export default SearchResult;
