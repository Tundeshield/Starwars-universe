import Card from "../../components/card/Card";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { selectCharacters } from "../../redux/features/character/charactersSlice";
import { useSelector } from "react-redux";

const HomePage = () => {
	const characters = useSelector(selectCharacters);
	return (
		<>
			{characters.map((character) => (
				<div key={character.height}>
					<Card character={character} />
				</div>
			))}
		</>
	);
};

export default HomePage;
