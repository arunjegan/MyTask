let socket = io();
socket.on('connect', function () {
    console.log('Server has been connnected')
});
socket.emit('createMessage',{
     'from' : 'user1',
     'Text' : 'Im Fine',
     "Date" : new Date().getTime()
})
socket.on('newMessage', (msg) => {
    console.log('newMessage',msg);
})
socket.on('disconnect', function ()  {
    console.log('Server has been disconnected');
})