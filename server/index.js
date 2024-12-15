const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const Users = require("./models/Users");
const Posts = require("./models/Posts");
const Announcements = require("./models/Announcements");
const Offers = require("./models/Offers")

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
});

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
});

router.post("/forgetPassword", async (req, res) => {
    console.log("[POST] /forgetPassword");

    let username = req.body.username;
    const currentPassword = req.body.password;
    const newPassword = req.body.newPassword;

    username = username.toLowerCase();

    try {
        const user = await Users.findOne({ $or: [{ email: username }, { username }] });

        if (!user) {
            console.log("[400] User not found");
            res.status(400).json({ success: false, message: "Incorrect username" });
        }

        const checkPassword = await bcrypt.compare(currentPassword, user.password);

        if (!checkPassword) {
            console.log("[400] Incorrect Password");
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        user.password = hashedPassword;
        await user.save();

        console.log("[200] Password updated successfully");
        return res.status(200).json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/posts", async(req, res) => {
    console.log("[GET] /posts");

    try {
        const posts = await Posts.find();
        console.log("[200] Posts retrieved successfully");
        return res.status(200).json({ success: true, posts });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/homePosts", async (req, res) => {
    console.log("[GET] /homePosts");

    try {
        const posts = await Posts.find();
        console.log("[200] Posts retrieved successfully");
        return res.status(200).json({ success: true, trending: posts[0], latest: posts[posts.length - 1] });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

router.post("/addPost", async(req, res) => {
    console.log("[POST] /addPost");

    const { author, title, content } = req.body;

    try {
        const newPost = new Posts({ author, title, content });
        await newPost.save();

        console.log("[200] Post created successfully");
        return res.status(200).json({ success: true, message: "Post created successfully" });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/announcements", async(req, res) => {
    console.log("[GET] /announcements");

    try {
        const announcements = await Announcements.find();
        console.log("[200] Announcements retrieved successfully");
        return res.status(200).json({ success: true, announcements });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

router.post("/addAnnouncement", async(req, res) => {
    console.log("[POST] /addAnnouncement");

    const { author, title, content } = req.body;

    try {
        const user = await Users.findById(author);

        if (user.type !== "admin") {
            console.log("[403] Forbidden");
            return res.status(403).json({ success: false, message: "You are not authorized to create an announcement" });
        }

        const newAnnouncement = new Announcements({ author, title, content });
        await newAnnouncement.save();

        console.log("[200] Announcement created successfully");
        return res.status(200).json({ success: true, message: "Announcement created successfully" });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

router.post("/editUser", async(req, res) => {
    console.log("[POST] /editUser");

    const { id, username, email, profilePicture } = req.body;

    try {
        const user = await Users.findById(id);

        if (!user) {
            console.log("[400] User not found");
            return res.status(400).json({ success: false, message: "User not found" });
        }

        user.username = username;
        user.email = email;
        user.type = type;
        user.profilePicture = profilePicture;

        await user.save();

        console.log("[200] User updated successfully");
        return res.status(200).json({ success: true, message: "User updated successfully" });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/offers", async(req, res) => {
    console.log("[GET] /offers");

    try {
        const offers = await Offers.find();
        
        console.log("[200] Offers retrieved successfully");
        return res.status(200).json({ success: true, offers });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log("[SERVER] Running on http://localhost:" + port);
});
