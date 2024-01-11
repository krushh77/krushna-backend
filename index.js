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

import EventEmitter from 'events';

const myemitter = new EventEmitter();

function greeting(){
    console.log("hello.")
}

function students(){
    console.log('all students are present')
}

myemitter.on('class', students)
myemitter.emit('class')
myemitter.on("krushna", greeting)

myemitter.emit('krushna')