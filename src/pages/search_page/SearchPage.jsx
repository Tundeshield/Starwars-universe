import React from "react";
import "./SearchPage.css";
import SearchResult from "../../components/search_result/SearchResult";
import { useSelector } from "react-redux";
import { useSearchResults } from "../../redux/features/search/searchResultSlice";

const SearchPage = () => {
	const results = useSelector(useSearchResults);

	return (
		<div className="searchpage">
			{results.length === 0 ? (
				<div className="searchpage__noresult">
					<h3>Oops...</h3>
					<p>Sorry, Starwars character not found may the force be with you !</p>
				</div>
			) : (
				results.map((result) => (
					<div key={result.name}>
						<SearchResult result={result} />
					</div>
				))
			)}
		</div>
	);
};

export default SearchPage;
