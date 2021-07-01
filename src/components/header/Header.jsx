import React from "react";
import "./Header.css";
import SearchBox from "../search/SearchBox";
import Logo from "../../assets/images/star-wars.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<img src={Logo} alt="" className="logo" />
			</div>
			<SearchBox />
			<div className="header__social">
				<FacebookIcon className="icon"/>
				<InstagramIcon className="icon"/>
				<TwitterIcon className="icon"/>
				<YouTubeIcon className="icon"/>
			</div>
		</div>
	);
};

export default Header;
