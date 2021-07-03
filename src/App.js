import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import CharacterPage from "./pages/character__page/CharacterPage";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import SearchPage from "./pages/search_page/SearchPage";
import { useDispatch, useSelector } from "react-redux";
import { addCharacterList } from "./redux/features/character/charactersSlice";
import { selectFavoriteList } from "./redux/features/favorites/favorites";

function App() {
	const [characters, setCharacters] = useState([]);
	const api = axios.create({
		baseURL: "https://swapi.dev/api/people/",
	});
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavoriteList);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/").then((res) => {
					const data = res.data.results;
					setCharacters(data);
				});
				return response;
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
		console.log("state changed again");
	}, [favorites]);

	return (
		<Router>
			<div className="app">
				{/*Header*/}
				<Header />
				<div className="body">
					{/*Sidebar*/}
					<div className="body__left">
						<Sidebar />
					</div>
					<Switch>
						<div className="body__right">
							<Route path="/" exact>
								<HomePage characters={characters} />
							</Route>
						</div>
						<Route path="/actor/:id">
							<CharacterPage />
						</Route>
						<Route path="/search/:term">
							<SearchPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
