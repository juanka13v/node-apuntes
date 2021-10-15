const os = require('os');

// info about current user

const user = os.userInfo();

// method returns the systen uptime in seconds

console.log(` the systen uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);;

