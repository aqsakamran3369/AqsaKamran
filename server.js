const express = require("express");
const cors = require("cors");
const path = require("path"); // Import path module

const app = express();
require("dotenv").config();
const dbConfig = require('./config/dbConfig');
const portfolioRoute = require("./routes/portfolioRoute");

app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
    res.send("Server is up and running!");
});

// API routes
app.use("/api/portfolio", portfolioRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
