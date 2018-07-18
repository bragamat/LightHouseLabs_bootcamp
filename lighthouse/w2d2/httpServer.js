const http = require('http');
const PORT = process.env.PORT || 8080;

function requestHandler(request, response) {
 if(request.url == "/"){
     response.end(`Welcome!`);
}
else if(request.url == "/urls"){
     response.end("www.lighthouselabs.ca\nwww.google.com")
} else {
     response.statusCode = 404;
     response.end("unknown path");
  }
}

let server = http.createServer(requestHandler);

server.listen(PORT, () =>{
  console.log(`Server Listening on: http://localhost:${PORT}`);
});
