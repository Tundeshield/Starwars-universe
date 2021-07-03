import React from "react";
import { Link } from "react-router-dom";

const PaginationButtons = () => {
	const startIndex = Number();
	return <div></div>;
};

export default PaginationButtons;

// const [chars, setChars] = useState(characters.slice(0, 50));
// const [pageNumber, setPageNumber] = useState(0);
// const charsPerPage = 4;
// const pagesVisited = pageNumber * charsPerPage;

// const displayChars = chars
// 	.slice(pagesVisited, pagesVisited + charsPerPage)
// 	.map((char) => {
// 		return (
// 			<>
// 				{char.map((character) => (
// 					<div key={character.height}>
// 						<Card character={character} />
// 					</div>
// 				))}
// 			</>
// 		);
// 	});

// const pageCount = Math.ceil(chars.length / charsPerPage);

// const changePage = ({ selected }) => {
// 	setPageNumber(selected);
// };
// return (
// 	<>
// 		{displayChars}
// 		<ReactPaginate
// 			previousLabel={"Previous"}
// 			nextLabel={"Next"}
// 			pageCount={pageCount}
// 			onPageChange={changePage}
// 			containerClassName={"paginationBttns"}
// 			previousLinkClassName={"previousBttn"}
// 			nextLinkClassName={"nextBttn"}
// 			disabledClassName={"paginationDisabled"}
// 			activeClassName={"paginationActive"}
// 		/>
// 	</>
// );
