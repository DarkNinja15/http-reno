export class HttpResponse {
  
    static createOkResponse(data: any) {
        return `HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: ${JSON.stringify(data).length}\r\n\r\n${JSON.stringify(data)}`;
    }

    static createNotFoundResponse() {
        return `HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\n\r\n`;
    }
}