import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//Event handler for when a new client connects

wss.on("connection", function(ws) {
    console.log("New client connected");
    setInterval(() => {
        ws.send("current price of SOL is " + Math.random());
    }, 500);


    ws.on("message", function(message) {
        console.log("received: %s", message);
    }
)})