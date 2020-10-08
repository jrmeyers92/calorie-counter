import React, { useState } from "react";

const Input = () => {
	const [searchTerm, setSearchTerm] = useState(" ");

	const getNutrition = async () => {
		const response = await fetch(
			`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${searchTerm}&app_id=${"4b30167a"}&app_key=${"a63e746fe6fe1ea55aeb0f0cfeec9022"}`
		);
		const data = response.json();
		console.log(data);
	};

	return (
		<div className='ui fluid input'>
			<input
				type='text'
				placeholder='search your food'
				onChange={(e) => {
					setSearchTerm(e.target.value);
					getNutrition({ searchTerm });
				}}
			/>
		</div>
	);

	// <div className='ui fluid input'>
	// 	<input
	// 		type='text'
	// 		placeholder='search your food'
	// 		onChange={(e) => {
	// 			setSearchTerm(e.target.value)
	// 			value={searchTerm}
	// 			getNutrition({searchTerm});
	// 		/>
	// </div>
};

export default Input;
