const express = require("express");
const app = express();

const friendsRouter = require("./routes/friends.router");

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now();
	-start;
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
	res.send("Welcome to the friends data response.");
});

app.use(express.json());
app.use("/friends", friendsRouter);

module.exports = app;
