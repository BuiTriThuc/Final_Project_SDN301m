const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const dotenv = require("dotenv");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

// Route Imports
const product = require('./routes/productRoutes');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoutes');
const payment = require('./routes/paymentRoutes');
const pet = require("./routes/petRoutes");

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment);
app.use('/api/v1', pet);

// app.use(express.static(path.join(__dirname, "../frontend/public")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/public/index.html"));
// });

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
