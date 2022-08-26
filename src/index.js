const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Load enn variables
dotenv.config({path:'./config/config.env'});

const database = [];
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{console.log('conectado')})
.catch(err=>console.log(err));

function getBooksHandle(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify(database));
    response.end();
}


const server = http.createServer((request,response)=>{

    const {url, method} = request;

    //logger
    console.log(`URL: ${url} | METHOD: ${method}`);

    switch(method){
        case "GET":
            if(url==='/'){
                response.writeHead(200,{'Content-Type':'text/plain'});
                response.write('received');
                response.end();
            }
            if(url==='/book'){
                getBooksHandle(request,response);
            }
            break;   
    }

});

server.listen(3000);
console.log('Server on port',3000);