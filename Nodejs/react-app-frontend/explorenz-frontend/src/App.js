import React, { useState, useEffect } from "react";

const TouristList = () => {
	// Initial state for the tourists, using a list to store the tourists.
	const [tourists, setTourists] = useState([]);

	// No dependencies - only called on page load.
	useEffect(() => {
		// Fetching from the API setup in Express.
		fetch("http://localhost:3000/api/tourist")
			.then((response) => response.json())
			.then((data) => setTourists(data))
			.then((data) => console.log(data))
			.catch((error) => console.error(`Error fetching data - ${error}`));
	}, []);

	return (
		<div>
			<h2>Tourist List</h2>
			{tourists.length > 0 ? (
				<ul>
					{tourists.map((tourist) => (
						<li key={tourist.id}>
							<strong>Name:</strong> {tourist.name}
							<br />
							<strong>Email:</strong> {tourist.email}
							<br />
							{/* Display other relevant details here */}
						</li>
					))}
				</ul>
			) : (
				<h1>No tourist in the db</h1>
			)}
		</div>
	);
};

export default TouristList;
