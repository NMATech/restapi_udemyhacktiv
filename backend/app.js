const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
mongoose.connect("mongodb://localhost:27017/restapi_udemyhacktiv", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to MongoDB:", err);
});

// route
const contacts = require("./routes/contacts");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Haloo ini aplikasi express sederhana");
});

app.use("/contacts/", contacts);

const port = 3000;
app.listen(port, () => {
  console.log("listening on port " + port);
});
