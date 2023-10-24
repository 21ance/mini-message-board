# mini-message-board

A basic project from [The Odin Project](https://www.theodinproject.com/lessons/nodejs-mini-message-board) which demonstrates a bit of node express-generator and Jade templating engine.

```javascript
// views/index.jade
block content
  h1= title
  - for (let i = 0; i < messages.length; i++)
      p User: #{messages[i].user}
      p #{messages[i].text}
      p Added: #{messages[i].added}
  a(href="/new") Add New Message
```

```javascript
// views/form.jade
block content
  h1= title
  form(method="POST", action="/new")
    div
      label Username:
      input(type="text", name="username")
    div
      label Message:
      input(type="text", name="message")
    button(type="submit") Submit
```

```javascript
// routes/index.js
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
...
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
```
