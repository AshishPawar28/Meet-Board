const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
       
    }
});

io.on("connection", (socket)=>{
    console.log("What is socket is: ", socket);
    console.log("Socket is active to be connected");
    
    socket.on("chat", (payload)=>{
        console.log("What is payload: ", payload);
        io.emit("chat",payload);
    });

    socket.on("boardUpdate", (payload)=>{
        console.log(payload)
        io.emit("boardUpdate",payload);
    })
})

server.listen(5000, ()=>{
    console.log("The server is listening at port 5000");
});