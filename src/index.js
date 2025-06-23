import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import express from "express";
const app = express();
import { connectDB } from "./db/database.js";

dotenv.config({
    path: ".env",
});


connectDB();