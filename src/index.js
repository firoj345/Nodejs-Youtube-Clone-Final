import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
// import express from "express";
// const app = express();
import { app } from "./app.js";
import { connectDB } from "./db/database.js";

dotenv.config({
    path: ".env",
});


connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    });
})
.catch((err) => console.log(err));