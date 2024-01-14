// console.log("hii")
// import fs from 'fs';
// //  Example usage of the fs module
// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// const content = 'hiiiiii';
// Create a new file and write content to it
// fs.writeFile('krushna.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File created and content written successfully.');
//   }
// });
import os  from 'os'
// console.log('platform :-', os,platform())
// console.log("release", os.release())
// console.log('hostname', os.hostname())
// console.log('CPUs', os.cpus())
// console.log('total memory', os.freemem()/1024,'mb')
// console.log('network interfaces', os.networkInterfaces())
// console.log('constants', os.constants)

// import EventEmitter from 'events';

// const myemitter = new EventEmitter();

// function greeting(){
//     console.log("hello.")
// }

// function students(){
//     console.log('all students are present')
// }

// myemitter.on('class', students)
// myemitter.emit('class')
// myemitter.on("krushna", greeting)

// myemitter.emit('krushna')



import http from 'http';

const books = ["krushna", "student", "abcd"];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/books") {
    res.end(JSON.stringify(books))
  } else if (req.method === "GET" && req.url === "/api/krushna") {
    res.end("Hi from krushna")
  } else {
    res.end("Method or url not found..")
  }
})

server.listen(8000, () => {
  console.log("Server is running on port 8000")
})

console.log("krushna 1");
setTimeout(() => { console.log("krishh 2") }, 3000)
console.log("krushh 3");
setTimeout(() => { console.log("Hello 4") }, 5000)
import express from 'express'

const app = express();

app.use(express.json())


app.get('/', (req,res) =>{
    res.send("welcome")
})


app.get('/',(req,res)=>{
    res.send("test.../test")
})

app.post('/testngpost', (req,res)=>{
    console.log(req.body)
    res.send(req.body.name)
})

app.listen('8000', ()=>{conmsole.log("listeningn on port 8000")})



