import Card from "../../components/card/Card";
import "./HomePage.css";
import { selectCharacters } from "../../redux/features/character/charactersSlice";
import { useSelector } from "react-redux";

const HomePage = ({ characters }) => {
	const chars = useSelector(selectCharacters);

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
