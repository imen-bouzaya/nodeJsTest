
// const http = require('http');
 var fs = require('fs');
// const hostname = '127.0.0.1';
//  const port = 3000;
// const server = http.createServer((req, res) => {
// res.statusCode = 200;
// res.setHeader('Content-Type', 'text/plain');
// res.end('Hello World');
// });
// server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`);
// });
// console.log("start reading")


  



const data = fs.readFileSync('./exemple.html',
        {encoding:'utf8', flag:'r'});
 
// // Display the file data
// console.log(data);

// console.log("finish reading")


const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    res.send(data)
})

app.listen(5000,err=>err?console.log(err):console.log("server is running on port 5000"))