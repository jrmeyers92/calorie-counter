import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import Input from "./Input";
import Edamam from "../apis/Edamam";

const App = () => {
	[radf, setradf] = useState([]);

	const onInputSubmit = (searchTerm) => {
		const response = Edamam.get("/parser?nutrition-type=logging&", {
			params: {
				ingr: searchTerm,
			},
		});
		console.log(response);
	};

	return (
		<div className='ui container'>
			<Header />
			<Input onInputSubmit={onInputSubmit} />
		</div>
	);
};

export default App;
