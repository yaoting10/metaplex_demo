import express, { Request, Response } from "express";
import {fetchAssets} from "./core/fetchNFT";

const app = express()

// respond with "hello world" when a GET request is made to the homepage

app.get("/", (request: Request, response: Response) => {
    // fetchAssets()
    response.status(200).send("Hello World");
});
