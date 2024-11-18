## HTTP response

    An HTTP response is made up of three parts, each separated by a CRLF (\r\n):

    1. Status line.
    2. Zero or more headers, each ending with a CRLF.
    3. Optional response body.
    
    The status line is made up of three parts:

    1. HTTP version.
    2. Status code.
    3. Reason phrase.

    The status code is a three-digit number that indicates the outcome of the request. The reason phrase is a human-readable description of the status code.

    The headers are key-value pairs that provide additional information about the response. The response body contains the data that the server sends back to the client.

    Here is an example of an HTTP response:

    ```
    HTTP/1.1 200 OK
    Content-Type: text/html
    Content-Length: 12
    ```

    In this example, the status line indicates that the response is using HTTP version 1.1, has a status code of 200 (OK), and a reason phrase of OK. The headers indicate that the content type is text/html and the content length is 12 bytes. There is no response body in this example.

## HTTP request
    An HTTP request is made up of three parts, each separated by a CRLF (\r\n):

    1. Request line.
    2. Zero or more headers, each ending with a CRLF.
    3. Optional request body.

    The request line is made up of three parts:
    
    1. Method.
    2. Request target.
    3. HTTP version.

    The method is the type of request being made (e.g., GET, POST, PUT, DELETE). The request target is the resource being requested (e.g., /index.html). The HTTP version is the version of the HTTP protocol being used (e.g., HTTP/1.1).

    The headers are key-value pairs that provide additional information about the request. The request body contains the data that the client sends to the server.

    Here is an example of an HTTP request:

    ```
    GET /index.html HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0
    ```

    In this example, the request line indicates that the client is making a GET request for the /index.html resource using HTTP version 1.1. The headers indicate that the request is being made to www.example.com and the user agent is Mozilla/5.0. There is no request body in this example.