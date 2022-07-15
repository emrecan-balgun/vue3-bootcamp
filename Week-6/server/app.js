const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const PORT = process.env.PORT || 2018;

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET","POST","OPTIONS"],
    },
});

server.listen(PORT, () => {
    io.on("connection", socket => {
        console.log(socket.id);
        // io.in(roomID).emit()

        // Server -> Client // Mesaj gönder
        socket.emit("WELCOME_MESSAGE", `Hoşgeldin ${socket.id}!`);

        // Client -> Server // Mesaj al
        socket.on("SEND_MESSAGE", (data) => {
            console.log("Gelen mesaj: ", data);
        })
    });
})