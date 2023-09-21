const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

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

//routes
app.get("/", (req, res) => {
    res.send("Welcome to social api");
})
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)



app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
