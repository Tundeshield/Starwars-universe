import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/homepage/HomePage";
function App() {
	return (
		<div className="app">
			{/*Header*/}
			<Header />
			<div className="main">
				{/*Sidebar*/}
				<Sidebar />
				<HomePage />
				{/*Main Page*/}
			</div>
			<Footer />
			{/*Movie page*/}
		</div>
	);
}

export default App;
