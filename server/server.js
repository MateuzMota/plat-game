const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io')

const sockets = socketio(server);

app.use(express.static("../client/src"));

const state = {
    players: []
}

sockets.on('connection', (socket) => {
    const playerId = socket.id;
    console.log(`Player ID: ${playerId}`);
})

server.listen(3000, () => {
    console.log('running...')
})