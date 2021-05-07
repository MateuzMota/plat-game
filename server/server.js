const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io')

const io = socketio(server);

app.use(express.static("../client/src"));

const state = {
    players: [],
}

io.on('connection', (socket) => {
    const playerId = socket.id;
    console.log(`Player ID: ${playerId}`);

    state.players.push(
        {
            id: playerId,
            x: Math.random() * (100 - 1) + 1,
            y: Math.random() * (100 - 1) + 1,
            w: 10,
            h: 10,
        }
    )

    socket.on('setState', function() {
        socket.emit('setup', state);
    });
})

server.listen(3000, () => {
    console.log('running...')
})