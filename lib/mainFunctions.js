const path = require('path');

// determina si es una ruta absoluta ~ return(boleano)
const pathAbsolute = (routePath) => path.isAbsolute(routePath);

// ternario para obtener la ruta absoluta
const getAbsolute = (routePath) => (pathAbsolute(routePath) ? routePath : path.resolve(routePath));

module.exports = {
  pathAbsolute,
  getAbsolute,
};
