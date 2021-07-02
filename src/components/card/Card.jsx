import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import "./Card.css";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Card = ({ character }) => {
	const [favorites, setFavorites] = useState([]);

	const addToFavorites = (character) => {
		const newFavorite = favorites.concat(character);
		setFavorites(newFavorite);
		// if (favorites.length === 0) {
		// 	setFavorites(favorites.push(character));
		// }
		// for (let item = 0; item < favorites.length; item++) {
		// 	if (character.height === item.height) {
		// 		console.log("We have it in the list already");
		// 	} else {
		// 		setFavorites(favorites.push(character));
		// 	}
		// 	return true;
		// }
		// console.log(favorites);

		console.log(favorites);
	};

	return (
		<div className="card">
			<div className="card__top">
				<div className="like">
					<FavoriteBorderOutlinedIcon
						onClick={() => addToFavorites(character)}
					/>
				</div>

				<div className="card__name">
					<h2>Name : {character.name}</h2>
				</div>
				<div className="card__year">
					<h5>Birth Year: {character.birth__year}</h5>
				</div>
				<div className="card__sex">
					<h5>Sex: {character.gender}</h5>
				</div>
				<div className="card__height">
					<h5>Height: {character.height}</h5>
				</div>
			</div>
			<Link to={`/actor/${character.height}`}>
				<div className="card__read">
					<p>Read More</p>
					<ChevronRightIcon className="icon__link" />
				</div>
			</Link>
		</div>
	);
};

export default Card;