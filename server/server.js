const express = require('express');
const app = express();
const server = require('http').createServer(app).listen(8080);
const socket = require('socket.io').listen(server);

const state = {
    players: []
}

socket.on('connection', (socket) => {
    const playerId = socket.id
    console.log(`Player ID: ${playerId}`);
})
