import { useState, useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Card.css";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
	addToFavorites,
	removeFromFavorites,
	selectFavoriteList,
} from "../../redux/features/favorites/favorites";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ character }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavoriteList);

	const added = favorites.find((i) => i.height === character.height);

	const addToFavoritesHandler = (character) => {
		if (!added) {
			dispatch(addToFavorites(character));
		}
		setIsFavorite(!isFavorite);
	};
	const removeFromFavoritesHandler = (character) => {
		const filtered = favorites.filter((i) => i !== character);
		dispatch(removeFromFavorites(filtered));
		setIsFavorite(false);
	};

	return (
		<div className="card">
			<div className="card__top">
				<div className="like">
					{isFavorite ? (
						<FavoriteIcon
							onClick={() => removeFromFavoritesHandler(character)}
						/>
					) : (
						<FavoriteBorderOutlinedIcon
							onClick={() => addToFavoritesHandler(character)}
						/>
					)}
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
