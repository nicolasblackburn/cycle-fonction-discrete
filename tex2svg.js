const { exec } = require('child_process');  
const btoa = require('btoa');
const latex = process.argv[2];
const imageFile = "images/" + btoa(latex).replace(/=/g, '_') + ".svg";
exec(`tex2svg '${latex}' > '${imageFile}'`);
console.log(`![\$${latex}\$](${imageFile})`);