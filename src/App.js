import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import CharacterPage from "./pages/character__page/CharacterPage";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import SearchPage from "./pages/search_page/SearchPage";

function App() {
	const [characters, setCharacters] = useState([]);
	const api = axios.create({
		baseURL: "https://swapi.dev/api/people/",
	});

	useEffect(() => {
		api.get("/").then((res) => {
			const data = res.data.results;
			setCharacters(data);
		});
	}, []);
	return (
		<Router>
			<div className="app">
				{/*Header*/}
				<Header />
				<div className="main">
					{/*Sidebar*/}
					<Sidebar />
					{/*Main Page*/}
					<Switch>
						<Route path="/" exact>
							<HomePage characters={characters} />
						</Route>
						{/*Movie page*/}
						<Route path="/actor/:id">
							<CharacterPage characters={characters} />
						</Route>
						<Route path="/search/:term">
							<SearchPage characters={characters} />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
