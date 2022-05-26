const express = require("express");
const dotenv = require("dotenv");
// const argon2 = require("argon2")
// const jwt = require("jsonwebtoken");
const registerRoute = require("./src/routes/Register");
const userRoute = require("./src/routes/User");
const productRoute = require("./src/routes/Product");
const cartRoute = require("./src/routes/Cart");
const orderRoute = require("./src/routes/Order");
const cors = require("cors");
require("./src/config/db");
const path = require("path");

//Models

// const auth = require("./middleware/auth");

const app = express();
app.use(express.json()); // so express will allow Json request Body
const port = process.env.PORT || 2000;
dotenv.config();

//cors permits
const corsOptions = {
  origin: "https://vofshoes.herokuapp.com/api/",
  credentials: true,
  origin: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api/signup", registerRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port} `);
});
console.log("hello world");
