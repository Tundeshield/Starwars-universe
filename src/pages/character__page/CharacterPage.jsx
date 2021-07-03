import "./CharacterPage.css";
import { useParams } from "react-router-dom";
import Yoda from "../../assets/images/yoda.jpg";
import { selectCharacters } from "../../redux/features/character/charactersSlice";
import { useSelector } from "react-redux";

const CharacterPage = () => {
	const characters = useSelector(selectCharacters);
	const { id } = useParams();
	const character = characters.find((char) => {
		return id === char.height;
	});
	console.log(character);
	return (
		<div className="characterPage">
			<div className="characterPage__left">
				<div className="character__detail ">
					<h2>Name : {character.name}</h2>
				</div>
				<div className="character__detail">
					<h5>Birth Year: {character.birth_year}</h5>
				</div>
				<div className="character__detail">
					<h5>Sex: {character.gender}</h5>
				</div>
				<div className="character__detail">
					<h5>Height: {character.height}CM</h5>
				</div>
				<div className="character__detail">
					<h5>Mass: {character.mass}</h5>
				</div>
				<div className="character__detail">
					<h5>Hair color: {character.hair__color}</h5>
				</div>
				<div className="character__detail">
					<h5>Skin color: {character.skin_color}</h5>
				</div>
				<div className="character__detail">
					<h5>Films: </h5>
				</div>
			</div>
		</div>
	);
};

export default CharacterPage;
