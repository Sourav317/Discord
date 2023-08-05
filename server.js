// import {express} from 'express';
const path = require("path");
const express = require('express');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const botName = "ChatCord Bot";


const PORT = 3000 || process.env.PORT;

app.listen(PORT,() => {console.log(`server is running on port ${PORT}`)});