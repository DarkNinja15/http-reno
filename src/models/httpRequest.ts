export class HttpRequest{

    public url: string | undefined;
    public method: string | undefined;
    public headers: any;
    public body: any;

    parseRequest(request:string){
        let requestArray = request.split("\n");
        let requestLine = requestArray[0].split(" ");
        this.method = requestLine[0];
        this.url = requestLine[1];
        let headers = requestArray.slice(1, requestArray.length-1);
        this.headers = {};
        for(let i=0; i<headers.length; i++){
            let header = headers[i].split(": ");
            this.headers[header[0]] = header[1];
        }
        this.body = requestArray[requestArray.length-1];
    }

    printRequest(){
        console.log("Method:",this.method);
        console.log("URL:",this.url);
        console.log("Headers:",this.headers);
        console.log("Body:",this.body);
    }
    
}