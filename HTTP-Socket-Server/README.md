# HTTP Socket Server

## Basic http server accepting socket connections via net.Server

### Resources

[HTTP Slides](http://slides.com/theremix/http)

[NodeJS Streams](http://slides.com/theremix/nodejs-streams)

[Events and Emitters](http://slides.com/theremix/events-and-emitters)

[NodeJS net module](https://nodejs.org/api/net.html)

[HTTP 1.1 Header Spec](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)

### Goals

The main server file is `server.js`. Additional **javascript** files may also be created.

1. Create a socket server to accept TCP connections
1. The server will listen on port **8080**
1. Transmit 'standard' HTTP Headers to the client
1. Transmit a hardcoded, in-memory html body for each route
1. Terminate the connection
1. If the path is not found in your routes, return a **404** status code and output some `text/html` content

_note, all data must be stored in memory, that is, in javascript only. external modules may be used through revealing module pattern._

**HTTP Headers**

1. The correct status code should be sent
1. Date : The current timestamp should be sent in RFC1123 format
1. Server : The name of your custom http server

### Testing

run your server with _nodemon_

`nodemon server.js`

Test with curl, postman, and Google Chrome

#### HTTP Headers

To view response headers, with your server running:

```
curl -I localhost:8080/
curl -I localhost:8080/hydrogen.html
curl -I localhost:8080/incorrect-path
```

#### HTTP Body Content

To view the response body, with your server running:

```
curl localhost:8080/
curl localhost:8080/hydrogen.html
curl localhost:8080/incorrect-path
```

### HTTP Server data

[Get the server content in this Gist](https://gist.github.com/theRemix/d926c96cb01c3465c98c)

### Routes

| HTTP | Path            | Content       |
|------|-----------------|---------------|
| GET  | /               | index.html    |
| GET  | /index.html     | index.html    |
| GET  | /hydrogen.html  | hydrogen.html |
| GET  | /helium.html    | helium.html   |
| GET  | /404.html       | 404.html      |
| GET  | /css/styles.css | styles.css    |


### Advanced

1. If the request for a file has not been modified since the last visit, return a **304** response code.

_hint: use the `If-Modified-Since` request header_

---

# HTTP Socket Client

## Basic http client establishing socket connections using net.Socket

### Resources

[HTTP Slides](http://slides.com/theremix/http)

[NodeJS Streams](http://slides.com/theremix/nodejs-streams)

[Events and Emitters](http://slides.com/theremix/events-and-emitters)

[NodeJS net module](https://nodejs.org/api/net.html)

[NodeJS process.argv](https://nodejs.org/api/process.html#process_process_argv)

[HTTP 1.1 Header Spec](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)

### Goals

The main client file is `client.js`.
The client will run once, then exit.

1. Create a client to establish TCP socket connections to HTTP servers
1. The node command requires a single argument, the host and uri to request a resource from
  - example: `www.devleague.com/apply`
1. Transmit 'standard' HTTP Headers to the server
1. Wait for a response from the server
1. When the server responds, display the response message body to the terminal
1. If the node client is run with no arguments, display a "help/usage" message that explains how to use your client, including all available options

example usage:

```
node client.js www.devleague.com
```

#### HTTP Request Headers

Send at least these headers in each request

1. The proper METHOD and URI should be used in the **Request Line**
1. Date : The current timestamp should be sent in RFC1123 format
1. Host : The name or ip address of the host that is being connected
1. User-Agent : The name of your custom http client

#### HTTP Response Headers

Parse the response headers, and store them in a hash table for later use.

### Testing

Test by requesting web servers with domain names, and your own running `server.js`

```
node client.js www.devleague.com
node client.js localhost
```

### Features

1. Pipe the response content stream to stdout
1. CLI Option to set the request method to use
1. CLI Option to display headers only (instead of content body)
1. CLI Option to set the port to use to connect to the server
1. Error Handling
  1. Handle the case where the HTTP Request is a client error (40x)
  1. Handle the case where the host can not be reached
  1. Handle the case where the host is found, and not listening on port 80
  1. Handle the case where the host is found and listening on the specified port, and not returning a valid HTTP Response
  1. Handle the case where the HTTP Response results in a server error (50x)
  1. Handle any other errors that you may encounter

### Advanced Client

Allow the client to send a valid POST request with a message body to a server.

### 2Advanced Client

Allow CLI Option to save the response message body as a file specified by the client.
For example:

```
node client.js -save devleague.com_index.html http://www.devleague.com
```

would save the contents of the response message from requesting http://www.devleague.com to a file named `devleague.com_index.html`
