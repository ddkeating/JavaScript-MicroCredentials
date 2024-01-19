import React from "react";
import "./Counter.css";

import {
	ChevronUp,
	ChevronsUp,
	ChevronDown,
	ChevronsDown,
	RotateCcw,
	Hash,
} from "react-feather";

const clamp = (val, min = 0, max = 1) => {
	if (min > max) {
		[min, max] = [max, min];
	}

	return Math.max(min, Math.min(max, val));
};

function Counter() {
	const [count, setCount] = React.useState(0);

	return (
		<div className="wrapper">
			<p>
				<span>Current value:</span>
				<br />
				<span className="count">{count}</span>
			</p>

			<div className="button-row">
				<button onClick={() => setCount(count + 1)}>
					<ChevronUp />

					<span className="visually-hidden">Increase slightly</span>
				</button>

				<button onClick={() => setCount(count + 10)}>
					<ChevronsUp />

					<span className="visually-hidden">Increase a lot</span>
				</button>

				<button onClick={() => setCount(0)}>
					<RotateCcw />

					<span className="visually-hidden">Reset</span>
				</button>

				<button
					onClick={() => {
						const nextCount = clamp(Math.ceil(Math.random() * 100), 1, 100);
						setCount(nextCount);
					}}
				>
					<Hash />

					<span className="visually-hidden">Set to random value</span>
				</button>

				<button onClick={() => setCount(count + -10)}>
					<ChevronsDown />

					<span className="visually-hidden">Decrease a lot</span>
				</button>

				<button onClick={() => setCount(count + -1)}>
					<ChevronDown />

					<span className="visually-hidden">Decrease slightly</span>
				</button>
			</div>
		</div>
	);
}

export default Counter;
