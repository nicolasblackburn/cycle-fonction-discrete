const btoa = require('btoa');
console.log(btoa(process.argv[2]).replace(/=/g, '_'));