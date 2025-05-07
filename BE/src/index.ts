import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//Event handler for when a new client connects

wss.on("connection", function(ws) {
    console.log("New client connected");


    ws.on("message", (e) =>{
        if(e.toString() === "Ping"){
            ws.send("Pong")
    }   
})
}
);