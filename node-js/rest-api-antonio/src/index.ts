//console.log("hello from the other side")
require('dotenv').config(); // Load the dotenv package

import express, { Router } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app= express();
app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server= http.createServer(app);

server.listen(8080, ()=> {
    console.log("server running on http://localhost:8080/");
})

mongoose.Promise= Promise;
const MONGO_URI= `${process.env.MONGO_URI}`


mongoose.connect(MONGO_URI);
mongoose.connection.on('error', (error:Error) => console.log(error))

app.use('/', router());




