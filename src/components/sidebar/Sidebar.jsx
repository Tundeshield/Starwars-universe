import React from "react";
import "./Sidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import StarsIcon from "@material-ui/icons/Stars";
import FolderIcon from "@material-ui/icons/Folder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__wrapper">
				<div className="sidebar__wrapperTop">
					<div className="sidebar__item">
						<FavoriteIcon className="sidebar__icon" />
						<p className="sidebar__name">Favorite</p>
					</div>
					<div className="sidebar__item">
						<StarsIcon className="sidebar__icon" />
						<p className="sidebar__name">Recommended</p>
					</div>
					<div className="sidebar__item">
						<ShareIcon className="sidebar__icon" />
						<p className="sidebar__name">Shared</p>
					</div>
					<div className="sidebar__item">
						<FolderIcon className="sidebar__icon" />
						<p className="sidebar__name">Folders </p>
					</div>
					<div className="sidebar__item">
						<FavoriteIcon className="sidebar__icon" />
						<p className="sidebar__name">Trash</p>
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
