// function sayHello(name) {
//   console.log(name);
// }
// sayHello('sadjk');

// function sayHi() {
//   console.log('Hello');
// }

// setTimeout(sayHi, 1000);
// const logger = require('./logger');

// logger('message');
// logger(logger.value);

// const path = require('path');
// const pathObj = path.parse(__filename);
// console.log(pathObj);
// console.log(__filename);

// const os = require('os');
// let totalMemory = os.totalmem();
// console.log(`The totalmemo is ${totalMemory}`);

// const fs = require('fs');
// console.log(fs.readdirSync('./'));

// fs.readdir('./', (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });
const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();

emitter.on('message', (arg) => {
  console.log('called', arg.id);
});
emitter.emit('message', { id: 1, url: 'www.3366.com' });
