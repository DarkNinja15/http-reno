import net from "net";

const PORT = 4221;

const server = net.createServer((socket)=>{
    console.log("Connected to client...");

    socket.on("data",()=>{});

    socket.on("end",()=>{
        console.log("Client disconnected");
    });
});

server.listen(PORT,()=>{
    console.log("Server listening on PORT",PORT);
});