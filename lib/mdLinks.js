const mainFunctions = require('./mainFunctions.js');
const validateLinks = require('./validateLinks.js');

const mdLinks = (path, options) => {
  if (options.validate === true) {
    return validateLinks(path);
  }
  return mainFunctions(path);
};

module.exports = mdLinks;
