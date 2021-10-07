const {readFile} = require('fs');


console.log('started a first task');

// Cheack File Path!!!

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('Complete first task');
})

console.log('starting next task');