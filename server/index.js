const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const Users = require("./models/Users");

// connect to mongodb
mongoose.connect("mongodb+srv://ESLSCA12345:ESLSCA12345@within.2x0cr.mongodb.net/Within?retryWrites=true&w=majority&appName=Within")
    .then(() => console.log("[MONGODB] Connected successfully"))
    .catch(err => console.error(err));

const port = 4000;
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

router.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Server is working" });
});

router.post("/login", async (req, res) => {
    console.log("[POST] /login");

    let username = req.body.username;
    const password = req.body.password;

    username = username.toLowerCase();

    try {
        const user = await Users.findOne({ $or: [{ email: username }, { username }] });
        if (!user) {
            console.log("[400] User not found");
            return res.status(400).json({ success: false, message: "Incorrect username" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.log("[400] Incorrect password");
            return res.status(400).json({ success: false, message: "Incorrect password" });
        } else {
            console.log("[200] Login successful");
            return res.status(200).json({ success: true, message: "Login successful", type: user.type });
        }
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
})

router.post("/register", async (req, res) => {
    console.log("[POST] /register");

    let { username, email, password, type } = req.body;

    username = username.toLowerCase();
    email = email.toLowerCase();

    try {
        const user = await Users.findOne({ $or: [{ email }, { username }] });
        if (user) {
            console.log("[400] User already exists");
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({ username, email, password: hashedPassword, type });
        await newUser.save();

        console.log("[200] User created successfully");
        return res.status(200).json({ success: true, message: "User created successfully" });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
})

router.post("/forgetPassword", async(req, res)=>{
    console.log("[POST] /forgetPassword");
    
    let username = req.body.username;
    const currentPassword = req.body.password;
    const newPassword = req.body.newPassword;

    username = username.toLowerCase();

    try{
        const user = await Users.findOne({ $or: [{email} , {username}] });
        
        if (!user){
            console.log("[400] User not found");
            res.status(400).json({succes: false, message:"Incorrect Username"});
        }
        const checkPassword = await bcrypt.compare(currentPassword, user.password);
        
        if (!checkPassword){
            console.log("[400] Incorrect Password");
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        const currentPassword = newPassword;
        const hashedPassword = await bcrypt.hash(currentPassword, 10)
        //ertegal men hena moot
        const updateUser = await Users.updateOne({password: hashedPassword});
        await updateUser.save();

        console.log("[200] User created successfully");
        return res.status(200).json({ success: true, message: "User created successfully" });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }    
})

app.listen(port, () => {
    console.log("[SERVER] Running on http://localhost:" + port);
});
