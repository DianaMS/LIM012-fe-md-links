const path = require('path');

// determina si es una ruta absoluta ~ return(boleano)
const pathAbsolute = (routePath) => path.isAbsolute(routePath);

module.exports = {
  pathAbsolute,
};
