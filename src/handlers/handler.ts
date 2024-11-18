import { HttpRequest } from "../models/httpRequest";
import { HttpResponse } from "../models/httpResponse";

export class Handler{
    httpReq: HttpRequest | undefined;

    constructor(httpReq: HttpRequest){
        this.httpReq = httpReq;
    }

    handleRequest(){
        if(this.httpReq?.method === "GET"){
            return this.handleGetRequest();
        }
    }

    handleGetRequest(){
        console.log("Handling GET request...");

        if(this.httpReq?.url !== "/"){
            return HttpResponse.createNotFoundResponse();
        }
    }
}