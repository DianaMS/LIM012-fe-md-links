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

// Leer sincronicamente el contenido de un directorio dado ~ return(una array)
const directoryNavigator = (routePath) => fs.readdirSync(routePath);

// retorna un array solo con archivos .md (con su respectiva ruta)
const getOnlyFilesMD = (routePath) => {
  let arrayFilesMD = [];
  const newRoute = getAbsolute(routePath);
  if (isFile(newRoute)) {
    if (fileExtension(newRoute) === '.md') {
      arrayFilesMD.push(newRoute);
    }
  } else {
    directoryNavigator(routePath).forEach((element) => {
      const addRoute = path.join(newRoute, element);
      const filesOfDirectory = getOnlyFilesMD(addRoute);
      arrayFilesMD = arrayFilesMD.concat(filesOfDirectory);
    });
  }
  return arrayFilesMD;
};

module.exports = {
  pathAbsolute,
  getAbsolute,
  isFile,
  fileExtension,
  directoryNavigator,
  getOnlyFilesMD,
};
