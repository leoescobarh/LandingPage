import React from "react";
import Card from './card.jsx'
import Navbar from './navbar.jsx'
import Jumbo from './jumbotron.jsx'
import Footer from './footer.jsx'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<Navbar />
			<Jumbo />
			<Card />
			<Card />
			<Footer />
			
		</div>
		
	
	);
};


export default Home;
