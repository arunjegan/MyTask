let socket = io();
 let myRoom = prompt('Enter Your Room');
 console.log('Your Room is',myRoom);
document.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(e.target.type)
    if(e.target.type != ''){
        let newMessage= document.querySelector('input[type="text"]').value;
        socket.on('connect', function () {
            console.log('Server has been connnected');
            socket.emit('room',myRoom);
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
        });
    }
    
})
    

