const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const port = process.env.PING_LISTEN_PORT || 3000; 
app.use(express.json())

app.get("/ping", (req, res) => {
    try {
        res.json(req.headers);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});
app.get("*", (req, res) => {
    try {
        res.status(404).send("Not Found");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});