
const{crearArchivo} = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');
console.clear();

//console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);

//v1
// const [,,arg3='base=5'] = process.argv;
// const [,base=5] = arg3.split('=');
// console.log(base);
//v1
crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
.catch(err=>console.log(err));
