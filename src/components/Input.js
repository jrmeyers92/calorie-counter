import React, { useState } from "react";

const Input = () => {
	const [searchTerm, setSearchTerm] = useState(" ");

	return (
		<div className='ui fluid input'>
			<input
				type='text'
				placeholder='search your food'
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
			/>
		</div>
	);
};

export default Input;
