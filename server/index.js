const express = require("express");
const bodyParser = require("body-parser");

const port = 8080;
const router = express.Router();
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log("Username: " + username + ", Password: " + password);
    res.send("<h1>Welcome " + username + "!</h1> <h2>You have successfully logged in.</h2>");
})

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});