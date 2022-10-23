"use strict";
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PING_LISTEN_PORT;
app.use(express.json());
app.get("/ping", function (req, res) {
    try {
        res.json(req.headers);
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
});
app.get("*", function (req, res) {
    try {
        res.status(404).send("Not Found");
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
});
app.listen(port, function () {
    console.log("Server listening on ".concat(port));
});
