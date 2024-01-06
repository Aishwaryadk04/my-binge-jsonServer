// import json-server in index.js
const jsonServer = require('json-server')

// create a server for myBinge app
const myBingeServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router("db.json")

// Return middlewares used by json server
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.PORT

// use middlewares and router in server
myBingeServer.use(middlewares)
myBingeServer.use(router)

// to listen server for resolving request from client
myBingeServer.listen(port,()=>{
    console.log(`myBinge server started at port ${port}, and waiting for client request!`);
})