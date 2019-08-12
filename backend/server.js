const http = require('http');


const normalizePort = val => {
    var port = parseInt(val, 10);
  
    if(isNaN(port)){
      //named pipe
      return val;
    }
  
    if(port>=0){
      //port number
      return port;
    }
  
    return false;
  };
  


const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr: "port" + port;
    console.log("Listening on " + bind);
  };
const onError = error => {
    if(error.syscall !== "Listen"){
      throw error;
    }
  
    const bind = typeof addr === "string" ? "pipe" + addr: "port" + port;
    switch(error.code){
      case "EACCES":
        console.error(bind + "requires elevated prileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + "is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
  
  const port = normalizePort(8080);


const server = http.createServer( (req, res)=>{
    const body = "Listening "
    res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
    res.end(body);
} 
).listen(port);

server.on('error', onError);
server.on('listening', onListening);