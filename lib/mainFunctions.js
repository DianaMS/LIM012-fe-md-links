const path = require('path');
const fs = require('fs');

// determina si es una ruta absoluta ~ return(boleano)
const pathAbsolute = (routePath) => path.isAbsolute(routePath);

// ternario para obtener la ruta absoluta
const getAbsolute = (routePath) => (pathAbsolute(routePath) ? routePath : path.resolve(routePath));

// determina si es un archivo ~ return(boleano)
const isFile = (routePath) => fs.statSync(routePath).isFile();

// retorna la extensión del path
const fileExtension = (routePath) => path.extname(routePath);

module.exports = {
  pathAbsolute,
  getAbsolute,
  isFile,
  fileExtension,
};
