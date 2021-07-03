import React, { useState } from "react";
import "./Sidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import StarsIcon from "@material-ui/icons/Stars";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
	selectFavoriteList,
	removeFromFavorites,
} from "../../redux/features/favorites/favorites";
import { useDispatch } from "react-redux";

const Sidebar = () => {
	const [toggle, setToggle] = useState(false);
	const favorites = useSelector(selectFavoriteList);
	const dispatch = useDispatch();

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const removeFromFavoritesHandler = (favorite) => {
		const filtered = favorites.filter((i) => i !== favorite);
		dispatch(removeFromFavorites(filtered));
	};
	return (
		<div className="sidebar">
			<div className="sidebar__wrapper">
				<div className="sidebar__wrapperTop">
					<div className="sidebar__item">
						<FavoriteIcon className={`sidebar__icon`} onClick={handleToggle} />
						<p className="sidebar__name">Favorites</p>
					</div>

					{favorites.length === 0
						? toggle
						: favorites.map((favorite) => (
								<div className={`sub__menu ${toggle ? "hide" : "show"}`}>
									<div className=" sub__menuitem">
										<Link to={`/character/${favorite.height}`}>
											<p className="submenu__itemText">{favorite.name}</p>
										</Link>
										<CloseIcon
											onClick={() => removeFromFavoritesHandler(favorite)}
											className="deleteIcon"
										/>
									</div>
								</div>
						  ))}

					<div className="sidebar__item">
						<PersonIcon className="sidebar__icon" />
						<p className="sidebar__name">Profile</p>
					</div>
					<div className="sidebar__item">
						<StarsIcon className="sidebar__icon" />
						<p className="sidebar__name">Recommended</p>
					</div>
					<div className="sidebar__item">
						<ShareIcon className="sidebar__icon" />
						<p className="sidebar__name">Shared</p>
					</div>
				</div>
				<div className="sidebar__wrapperBottom">
					<ExitToAppIcon className="sidebar__icon" />
					<p className="sidebar__name">Logout</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
