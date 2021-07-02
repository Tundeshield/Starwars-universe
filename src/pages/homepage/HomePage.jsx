import Card from "../../components/card/Card";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = ({ characters }) => {
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
