import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/database.js";



const app = express();



//Initialize Port Number
const PORT = process.env.PORT || 3000;

//Connect DB
connectDB();

//Listining
app.listen(PORT, () => console.log(`Server is Started On ${PORT}`));
