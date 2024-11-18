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