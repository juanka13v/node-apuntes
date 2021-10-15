const {readFileSync,writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
const second = readFileSync('./content/subfolder/second.txt', 'utf-8');



writeFileSync('./content/result-sync.txt', `Hello is the result: ${first}, ${second}`, {flag: 'a'})

console.log('done with this task');
console.log('staring the next one ');
