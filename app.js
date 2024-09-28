const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const users = {}; // Store user locations

io.on('connection', function(socket) {
    console.log('Socket connected: ' + socket.id);

    // When a user sends their location
    socket.on('send-location', (data) => {
        const { coords, name } = data;
        users[socket.id] = { coords, name }; // Store user location and name
        io.emit('receive-location', { id: socket.id, coords, name }); // Broadcast updated location to all clients
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log('Socket disconnected: ' + socket.id);
        delete users[socket.id]; // Remove user from the list
        io.emit('remove-marker', socket.id); // Notify others to remove the marker
    });
});

app.get('/', function(req, res) {
    res.render('index');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
