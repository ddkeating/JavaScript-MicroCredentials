import React, { useRef, useEffect, useState, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function NumberGenerator() {
	//Testing to see if math.random works
	return Math.floor(Math.random() * 9);
}

const NumberButton = [];

for (let i = 0; i < 10; i++) {
	NumberButton.push(i);
}

function App() {
	const [number, setNumber] = useState(0);
	const [randomNumber, setRandomNumber] = useState(0);
	const [result, setResult] = useState(null);

	useEffect(() => {
		setRandomNumber(NumberGenerator());
	}, []);

	const GuessNumber = () => {
		setResult(randomNumber === number ? "Correct" : "Incorrect");
		setRandomNumber(NumberGenerator());
	};

	return (
		<div className="Main">
			<h1>Simple Guessing Game</h1>
			<div className="Button-Container">
				{NumberButton.map((number) => (
					<button
						className="Random-Button"
						key={number}
						onClick={() => setNumber(number)}
					>
						{console.log(randomNumber)}
						{number}
					</button>
				))}
			</div>
			<button onClick={GuessNumber}>Guess</button>
			{result && <h1>{result}</h1>}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
