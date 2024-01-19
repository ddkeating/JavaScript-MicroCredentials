const express = require("express");
const friendsRouter = express.Router();

const friendsController = require("../controllers/friends.controller");

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postNewFriend);

module.exports = friendsRouter;
