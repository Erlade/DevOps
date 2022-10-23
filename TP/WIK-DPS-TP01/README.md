# WIK-DPS-TP01

This project consists in developping an API that returns request headers in JSON format when there is an HTTP GET request on /ping.

### Setup

First, clone this project and install packages with the command ```npm install```

### How to use

Start the server by typing ```node src/index.ts```

#### - Change the server port 

You can create a .env file or modify the existing one with the server port of your choice. The default port is 3000.

#### - Results

Typing ```localhost:yourport/ping``` will get the headers as a response. Other requests or paths will return a 404 error (or 500 error).
