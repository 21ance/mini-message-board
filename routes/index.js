var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

router.get("/", (req, res, next) => {
	res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res, next) => {
	res.render("form", { title: "New Message" });
});

router.post("/new", (req, res, next) => {
	messages.push({
		text: req.body.message,
		user: req.body.username,
		added: new Date(),
	});
	res.redirect("/");
});

module.exports = router;
