import React from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
	return (
		<Link to={`/actor/${result.height}`} className="search__result">
			<h2 className="search__header">{result.name}</h2>
			<p className="search__details">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
				repudiandae voluptates beatae fugit expedita hic fugiat, eaque quisquam
				perferendis iusto.
			</p>
			<Link>
				<p>
					Read more about <b> {result.name}</b> ...
				</p>
			</Link>
		</Link>
	);
};

// `/actor/${character.height}`

export default SearchResult;
