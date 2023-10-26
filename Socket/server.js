const express =require('express');
const app = express();
const http = require('http');
const socket = require('socket.io');
const path = require('path');
const port = 8000;

const server = http.createServer(app);
const io = socket(server);
io.on('connection', (socketEvent) => {
    console.log('New user connection');
    
    socketEvent.on('createMessage' ,(msg) => {
        console.log('createMessage listen',msg)
        socketEvent.emit('newMessage',{
            'From' : 'Admin',
            'Text' : 'Welcome to Chat APP',
            "Date" : new Date().getTime()
        });
        socketEvent.broadcast.emit('newMessage',{
            'From' : 'Admin',
            'Text' : 'A new user Joined',
            "Date" : new Date().getTime()
        });
    });
    socketEvent.on('disconnect', () => {
        console.log('New user has been disconnect');
    })
});


app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'));
})
server.listen(port,() => {
    console.log(`App is listening on ${port}`);
})


