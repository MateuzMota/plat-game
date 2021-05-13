const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io');
const {createGame} = require('./gameServer.js');

const sockets = socketio(server);

app.use(express.static("../client/src"));

const game = createGame();
console.log(game);

game.subscribe((command) => {   //subscribes the function that emits commands to the client side
    sockets.emit(command.type, command);
})

sockets.on('connection', (socket) => {
    const playerId = socket.id;

    socket.on('setup', function(nick) {
        for(player of game.state.players) {
            if(player.nickName == nick) {
                return
            }
        }

        game.state.players.push(
            {
                id: playerId,
                nickName: nick,
                x: Math.random() * (100 - 1) + 1,
                y: Math.random() * (100 - 1) + 1,
                w: 10,
                h: 10,
                velocity: {
                    x: 0,
                    y: 0
                }
            }
        )

        socket.emit('setup', game.state);

        console.log(`Player ID: ${playerId}`);
        console.log(`>>>${nick} joined the game`);
    })
});

setInterval(() => {
    game.run()
}, 1000/50);

server.listen(3000, () => {
    console.log('running...')
})