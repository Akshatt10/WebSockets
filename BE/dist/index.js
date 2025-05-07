"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//Event handler for when a new client connects
wss.on("connection", function (ws) {
    console.log("New client connected");
    setInterval(() => {
        ws.send("current price of SOL is " + Math.random());
    }, 500);
    ws.on("message", function (message) {
        console.log("received: %s", message);
    });
});
