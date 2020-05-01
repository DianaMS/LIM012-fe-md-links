// const cliOpt = require('./cliOptions');

// capturo argumentos de la línea de comandos
const [,, ...args] = process.argv;
const pathCLI = process.argv[2];
const imprime = args[1];
const imprime1 = args[0];


// if (pathCLI === undefined) {
//   // eslint-disable-next-line no-console
//   console.log(`
//   ----------------------------Valid Arguments----------------------------

//   Option1: md-links <path-to-file>
//   Option2: md-links <path-to-file> --validate
//   Option3: md-links <path-to-file> --stats
//   Option4: md-links <path-to-file> (--stas --validate || --validate --stas)

//   ------------------------------------------------------------------------
//   `);
// }
// cliOpt(pathCLI, options)
//   .then((response) => console.log(response));

console.log(`Hello world ${imprime} ${imprime1}`);
console.log(`Hola ${pathCLI}`);
