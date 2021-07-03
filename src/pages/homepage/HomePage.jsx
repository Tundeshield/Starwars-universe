import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/card/Card";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { selectCharacters } from "../../redux/features/character/charactersSlice";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { addCharacterList } from "../../redux/features/character/charactersSlice";

const HomePage = ({ characters }) => {
	const dispatch = useDispatch();
	const chars = useSelector(selectCharacters);

	// useEffect(() => {
	// 	dispatch(addCharacterList(characters));
	// }, []);

	return (
		<>
			{chars.map((character) => (
				<div key={character.height} id={character.height}>
					<Card character={character} />
				</div>
			))}
		</>
	);
};

export default HomePage;
