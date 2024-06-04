
// const Logger = require('./logger')

function sayHello(name){
    console.log("hello" +name);
}
// sayHello('anthony')

//there is no window.xx

// console.log(); 
//global object

// log('message')


const path = require('path')

const pathObj = path.parse(__filename);

// console.log(pathObj)

const os = require('os')

const totalMemory = os.totalmem()
const freeMemory = os.freemem()

// console.log(`${totalMemory}, ${freeMemory}`)

const fs = require('fs');

// const files = fs.readdirSync('./')
// const files2 = fs.readdir('$', function(err, files){
//     if(err) console.log('error', err);
//     else console.log('result', files)
// })
// console.log(files)
// console.log(files2)

//Event Emitter
// const EventEmitter = require('events');
// const emitter = new EventEmitter()
//register a listener

// emitter.on('messageLogged', (arg)=>{
//     console.log('Listener called', arg)
// })

// emitter.emit('messageLogged', {id:1, url:'http://'})

//raise: logging (data: message)

// emitter.on('logging', (arg)=>{
//     console.log('message logged', arg)
// })
// emitter.emit('logging', {data:'message'})

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log('Listener called', arg)
});

logger.log('message');

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('hello');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]))
        res.end()
    }
});

// server.on('connection', (socket)=>{
//     console.log('new connection')
// })



server.listen(3003)

console.log('listenin on port 3000...')