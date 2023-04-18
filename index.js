const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());
app.set("view engine", "ejs");

const db = "mongodb://localhost:27017/url-shortner";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error :" + err));

app.use("/", require("./routes/url"));

app.listen(5000, () => console.log("Server is running on port 5000"));
