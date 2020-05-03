#!/usr/bin/env node
const cliOpt = require('./cliOptions');

// capturo argumentos de la línea de comandos
const [,, ...args] = process.argv;
const pathCLI = args[0];
const input = [];
for (let i = 1; i < args.length; i += 1) {
  input.push(args[i]);
}
const newInput = input.join(' ');

if (pathCLI === undefined) {
  // eslint-disable-next-line no-console
  console.log(`
  ----------------------------Valid Arguments----------------------------

  Option1: md-links <path-to-file>
  Option2: md-links <path-to-file> --validate
  Option3: md-links <path-to-file> --stats
  Option4: md-links <path-to-file> (--stas --validate || --validate --stas)

  ------------------------------------------------------------------------
  `);
} else {
  cliOpt(pathCLI, newInput)
    // eslint-disable-next-line no-console
    .then((response) => console.log(response))
    // eslint-disable-next-line no-console
    .catch((error) => console.log('-->No se encontró esta ruta'));
}


// console.log(`Hello world ${imprime} ${imprime1}`);
// console.log(`Hola ${pathCLI}`);
// console.log(`Hola ${args}`);
