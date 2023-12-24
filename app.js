// importaciones
const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// limpio la consola
console.clear();

// llamo a la función que crea el archivo
createFile(argv.base, argv.listar, argv.hasta)
    .then(x => console.log(x.bold, 'creada'.bold))
    .catch(e => console.log(e));