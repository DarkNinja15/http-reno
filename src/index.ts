import net from "net";

const PORT = 4221;

const server = net.createServer((socket)=>{
    console.log("Connected to client...");

    socket.write("HTTP/1.1 200 OK\r\n");

    socket.end();
});

server.listen(PORT,()=>{
    console.log("Server listening on PORT",PORT);
});

