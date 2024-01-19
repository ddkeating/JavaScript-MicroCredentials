import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [cookies, setCookies] = useState(false);

	useEffect(() => {
		alert("You have accepted the use of cookies.");
	}, [cookies]);

	return (
		<div className="App">
			<h1>Pop up window</h1>
			<p>
				Would like to accept the use of cookies on this website?
				<br />
				Click Yes to continue...
			</p>
			<div className="btn-container">
				<button onClick={() => setCookies(true)}>Accept</button>
				<button onClick={() => setCookies(false)}>Decline</button>
			</div>
		</div>
	);
}

export default App;
