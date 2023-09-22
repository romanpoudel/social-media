const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");
// const cors = require("cors");

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }).then(
	() => {
		console.log("Connected to MongoDB");
	},
	(err) => {
		console.log(err);
	}
);

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));


//routes
app.get("/", (req, res) => {
	res.send("Welcome to social api");
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/assets");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ error: "No file uploaded" });
		}
		return res.status(200).json("File uploaded successfully");
	} catch (err) {
		console.log(err);
	}
});


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
