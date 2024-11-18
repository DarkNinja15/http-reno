import net from "net";
import { HttpRequest } from "./models/httpRequest";
import { Handler } from "./handlers/handler";
import { HttpResponse } from "./models/httpResponse";

const PORT = 4221;

const server = net.createServer((socket)=>{
    console.log("Connected to client...");

    socket.on("data",(data)=>{
        console.log(data.toString());
        let request = new HttpRequest();
        request.parseRequest(data.toString());

        let response = new Handler(request).handleRequest();

        console.log(response);

        socket.write(response?? HttpResponse.createOkResponse({message:"Hello World"}));
    });
});

server.listen(PORT,()=>{
    console.log("Server listening on PORT",PORT);
});

